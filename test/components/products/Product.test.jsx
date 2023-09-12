import { render, screen } from "@testing-library/react";
import  Product  from "../../../src/components/product/Product";
import { dataProducts } from "../../fixtures/products";

describe(`TEST COMPONENT <Product />`, () => {
    const data = dataProducts

    test("CONTROL - Validar la estructura del componente", () => {
        // aqui va la logica
       const snapshot = render(<Product products={data}/>);
       expect(snapshot).toMatchInlineSnapshot(`
{
  "asFragment": [Function],
  "baseElement": <body>
    <div>
      <div
        class="col-lg-4"
      >
        <ul
          class="list-group shadow"
        >
          <li
            class="list-group-item"
          >
            <div
              class="media align-items-lg-center flex-column flex-lg-row p-3"
            >
              <div
                class="media-body order-2 order-lg-1"
              >
                <h5
                  class="mt-0 font-weight-bold mb-2"
                >
                  SAMSUNG A13
                </h5>
                <p
                  class="font-italic text-muted mb-0 small"
                >
                  Nuevo dispositivo con dos procesadores y camara de 13 mpx
                </p>
                <div
                  class="d-flex align-items-center justify-content-between mt-1"
                >
                  <h6
                    class="font-weight-bold my-2"
                  >
                    $120.000
                  </h6>
                </div>
              </div>
              <img
                alt="Generic placeholder image"
                class="ml-lg-5 order-1 order-lg-2"
                src="https://i.imgur.com/KFojDGa.jpg"
                width="200"
              />
              <div
                class="mt-4"
              >
                <button
                  class="btn btn-outline-primary"
                  type="button"
                >
                  MeGusta: 0
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </body>,
  "container": <div>
    <div
      class="col-lg-4"
    >
      <ul
        class="list-group shadow"
      >
        <li
          class="list-group-item"
        >
          <div
            class="media align-items-lg-center flex-column flex-lg-row p-3"
          >
            <div
              class="media-body order-2 order-lg-1"
            >
              <h5
                class="mt-0 font-weight-bold mb-2"
              >
                SAMSUNG A13
              </h5>
              <p
                class="font-italic text-muted mb-0 small"
              >
                Nuevo dispositivo con dos procesadores y camara de 13 mpx
              </p>
              <div
                class="d-flex align-items-center justify-content-between mt-1"
              >
                <h6
                  class="font-weight-bold my-2"
                >
                  $120.000
                </h6>
              </div>
            </div>
            <img
              alt="Generic placeholder image"
              class="ml-lg-5 order-1 order-lg-2"
              src="https://i.imgur.com/KFojDGa.jpg"
              width="200"
            />
            <div
              class="mt-4"
            >
              <button
                class="btn btn-outline-primary"
                type="button"
              >
                MeGusta: 0
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>,
  "debug": [Function],
  "findAllByAltText": [Function],
  "findAllByDisplayValue": [Function],
  "findAllByLabelText": [Function],
  "findAllByPlaceholderText": [Function],
  "findAllByRole": [Function],
  "findAllByTestId": [Function],
  "findAllByText": [Function],
  "findAllByTitle": [Function],
  "findByAltText": [Function],
  "findByDisplayValue": [Function],
  "findByLabelText": [Function],
  "findByPlaceholderText": [Function],
  "findByRole": [Function],
  "findByTestId": [Function],
  "findByText": [Function],
  "findByTitle": [Function],
  "getAllByAltText": [Function],
  "getAllByDisplayValue": [Function],
  "getAllByLabelText": [Function],
  "getAllByPlaceholderText": [Function],
  "getAllByRole": [Function],
  "getAllByTestId": [Function],
  "getAllByText": [Function],
  "getAllByTitle": [Function],
  "getByAltText": [Function],
  "getByDisplayValue": [Function],
  "getByLabelText": [Function],
  "getByPlaceholderText": [Function],
  "getByRole": [Function],
  "getByTestId": [Function],
  "getByText": [Function],
  "getByTitle": [Function],
  "queryAllByAltText": [Function],
  "queryAllByDisplayValue": [Function],
  "queryAllByLabelText": [Function],
  "queryAllByPlaceholderText": [Function],
  "queryAllByRole": [Function],
  "queryAllByTestId": [Function],
  "queryAllByText": [Function],
  "queryAllByTitle": [Function],
  "queryByAltText": [Function],
  "queryByDisplayValue": [Function],
  "queryByLabelText": [Function],
  "queryByPlaceholderText": [Function],
  "queryByRole": [Function],
  "queryByTestId": [Function],
  "queryByText": [Function],
  "queryByTitle": [Function],
  "rerender": [Function],
  "unmount": [Function],
}
`);
       screen.debug()
    });
    test(`CONTROL - Validar las props data recibidas`, () =>{
        render(<Product products={data}/>)
        //screen.debug();
        expect(screen.getByText(`SAMSUNG A13`))
    });
    test(`CONTROL - Validar el tag src de la imagen tenga info`, () => {
        render(<Product products={data}/>);
        const img = screen.getByRole("img");
        const price = screen.getByRole("h6");
        expect(img.src).toContain(data[0].image);
        expect(price).toBe(data[0].prince);
    });
})