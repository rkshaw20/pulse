import React, { useEffect, useState } from "react";

const AddressForm = ({
  setShowForm,
  onFormSubmit,
  onFormEdit,
  setIsEditing,
  isEditForm,
  editAddress,
  setShowCard,
}) => {
  const [newAddress, setNewAddress] = useState({
    name: "",
    phone: "",
    addressText: "",
    city: "",
    pin: "",
    state: "",
  });

  useEffect(() => {
    if (editAddress) {
      setNewAddress(editAddress);
    }
  }, [editAddress]);

  const inputHandler = (e, inputName) => {
    setNewAddress((prev) => ({
      ...prev,
      [inputName]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isEditForm) {
      onFormEdit(newAddress);
      setIsEditing(false);
      setShowCard(true);
    } else {
      onFormSubmit(newAddress);
      setShowForm(false);
    }
  };

  return (
    <div className="address-form-container">
      <h4>{isEditForm ? "Edit Address" : "Add New Address"}</h4>
      <form onSubmit={handleFormSubmit} className="address-form">
        <div>
          <input
            type="text"
            id="name"
            value={newAddress.name}
            placeholder="Name"
            onChange={(e) => inputHandler(e, "name")}
            required
          />
        </div>
        <div>
          <input
            type="number"
            id="phone"
            value={newAddress.phone}
            placeholder="Phone Number"
            onChange={(e) => inputHandler(e, "phone")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="addressText"
            placeholder="Address"
            value={newAddress.addressText}
            onChange={(e) => inputHandler(e, "addressText")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="city"
            value={newAddress.city}
            placeholder="City"
            onChange={(e) => inputHandler(e, "city")}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="state"
            value={newAddress.state}
            placeholder="State"
            onChange={(e) => inputHandler(e, "state")}
            required
          />
        </div>
        <div>
          <input
            type="number"
            id="pin"
            value={newAddress.pin}
            placeholder="Pincode"
            onChange={(e) => inputHandler(e, "pin")}
            required
          />
        </div>

        <div className="address-form-btn-group">
          <button>SAVE</button>

          {!isEditForm && (
            <button type="button" onClick={() => setShowForm(false)}>
              CANCEL
            </button>
          )}
          {isEditForm && (
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setShowCard(true);
              }}
            >
              CANCEL
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
