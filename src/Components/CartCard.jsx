import { Button } from "reactstrap";
import Accordian from "./Accordian";
import PropTypes from "prop-types";

export default function CartCard({
  data = {},
  dispatcher = () => {},
  quantityChange = () => {},
}) {
  return (
    <div className="row mb-3">
      <div className="col-6">
        <div className="row">
          <div className="col-3">
            <img
              className="product_image"
              src="data:image/jpeg;base64,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"
              alt="book"
            />
          </div>
          <div className="col-9">
            <h4 className="mb-4">{data.title}</h4>
            <Accordian
              options={[
                {
                  title: "Details & Care",
                  description:
                    "We procider great looking book cover that pulls readers to buy this book.",
                },
                {
                  title: "Sustainability",
                  description:
                    "We procider great looking book cover that pulls readers to buy this book.",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <div className="row d-flex justify-content-end">
              <div className="col-4">
                <select
                  defaultValue={data.quantity}
                  className="quantity_changer"
                  onChange={(e) =>
                    dispatcher(
                      quantityChange({ id: data.id, value: e.target.value })
                    )
                  }
                >
                  <option value={0}>Select Quantity</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
              <div className="col-4">
                <h5>${data.price}</h5>
              </div>
            </div>
            <div className="row d-flex justify-content-end">
              <div className="col-4"></div>
              <div className="col-4">
                <Button type="submit" color="link">
                  DELETE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  data: PropTypes.object,
  dispatcher: PropTypes.func,
  quantityChange: PropTypes.func,
};
