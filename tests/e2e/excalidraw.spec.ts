import { test, expect } from '@playwright/test'

test('mounts Excalidraw with React 19 and preserves the certificate sidebar', async ({
  page,
}) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await expect(page.locator('.excalidraw canvas').first()).toBeVisible()
  await page.getByTitle('Certificate Fields', { exact: true }).click()
  await expect(
    page.getByRole('checkbox', { name: 'Certificate Fields' }),
  ).toBeChecked()
  await expect(
    page.getByRole('heading', { name: 'Certificate Fields' }),
  ).toBeVisible()
  await page.getByRole('tab', { name: 'Custom Fields' }).click()
  await expect(page.getByRole('button', { name: 'Tambah Field' })).toBeVisible()
  await page.getByRole('tab', { name: 'Actor Fields' }).click()
  await expect(
    page.getByRole('button', { name: 'Nomor Induk Pegawai' }),
  ).toBeVisible()
  expect(errors).toEqual([])
})

test('draws a rectangle and exports a PNG with the upgraded editor', async ({
  page,
}) => {
  // Exercise the download fallback instead of Chromium's native save picker.
  await page.addInitScript(() => {
    Reflect.deleteProperty(window, 'showSaveFilePicker')
    Reflect.deleteProperty(window, 'showOpenFilePicker')
  })
  await page.goto('/')
  const canvas = page.locator('.excalidraw canvas.interactive')
  await expect(canvas).toBeVisible()
  const bounds = (await canvas.boundingBox())!
  await page
    .getByRole('radio', { name: 'Rectangle', exact: true })
    .locator('..')
    .click()
  await expect(
    page.getByRole('radio', { name: 'Rectangle', exact: true }),
  ).toBeChecked()
  await page.mouse.move(bounds.x + 300, bounds.y + 250)
  await page.mouse.down()
  await page.mouse.move(bounds.x + 500, bounds.y + 350, { steps: 10 })
  await page.mouse.up()
  await expect(
    page.getByRole('button', { name: 'Undo', exact: true }),
  ).toBeEnabled()
  await page.keyboard.press('Escape')
  await page.getByTestId('main-menu-trigger').click()
  await page.getByText('Export image...', { exact: true }).click()
  await expect(
    page.getByRole('dialog').filter({
      has: page.getByRole('heading', { name: 'Export image', exact: true }),
    }),
  ).toBeVisible()
  const pendingDownload = page.waitForEvent('download')
  await page.getByRole('button', { name: 'Export to PNG', exact: true }).click()
  expect((await pendingDownload).suggestedFilename()).toMatch(/\.png$/)
})
