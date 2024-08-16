import React from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const CustomFields = () => {
  return (
    <div className="grid grid-flow-row h-full gap-2">
      <ul className="list-none overflow-auto grid gap-2">
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
        <li>
          <Button variant="outline" className="w-full">
            Tanda Tangan
          </Button>
        </li>
      </ul>
      <div className="flex justify-center items-end">
        <Button className="w-full">
          <Plus className="mr-2 h-4 w-4" /> Tambah Field
        </Button>
      </div>
    </div>
  )
}

export default CustomFields
