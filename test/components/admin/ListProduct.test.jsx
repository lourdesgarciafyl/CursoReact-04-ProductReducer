import { render, screen } from "@testing-library/react"
import  ListProduct  from "../../../src/components/admin/ListProduct"
import { dataProducts } from "../../fixtures/products"

describe("TEST -COMPONENT <ListProduct/>", () => {
    const data = dataProducts
    const onDeleteProduct = jest.fn()

    test("CONTROL - Validar que los datos lleguen a la grilla", () => {
        render(< ListProduct  products={data} onDeleteProduct={() => {}}/>)
        const td = screen.getAllByRole("cell")
        const th = screen.getAllByRole("rowheader", { name: data[0].id })
        const values = td.map(cell => cell.textContent);
        expect(values).toContain(data[0].title)
        expect(values).toContain(data[0].price)
        expect(th.textContent).toBe(data[0].id.toString())
    })

    test("EXECUTE EVENT - Validar el llamado a la accion eliminar", ()=> {
        render(< ListProduct  products={data} onDeleteProduct={() => {}}/>)
        
    })
})