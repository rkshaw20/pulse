import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDataContext } from "../../../contexts/DataContextProvider";
import { TYPE } from "../../../utils/constants";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";

const AddressList = ({
  isAddressPage,
  selectedAddress,
  setSelectedAddress,
}) => {
  const { addresses, dataDispatch } = useDataContext();
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const [editAddress, setEditAddress] = useState(null);

  const handleAddNewAddress = (address) => {
    dataDispatch({
      type: TYPE.ADD_ADDRESS,
      payload: { ...address, id: uuid() },
    });
  };

  const handleAddressEdit = (addressId) => {
    dataDispatch({ type: TYPE.EDIT_ADDRESS, payload: addressId });
  };

  const handleAddressDelete = (addressId) => {
    dataDispatch({ type: TYPE.DELETE_ADDRESS, payload: addressId });
  };

  const handleAddressSelect = (e) =>{
    console.log(addresses.id)
    setSelectedAddress(addresses.find(({ id }) => id === (e.target.value)));
  }

  return (
    <div className="address-container">
      {}
      <h2>Addresses</h2>
      <div>
        {addresses.map((address) => (
          <AddressCard
            address={address}
            key={address.id}
            setEditAddress={setEditAddress}
            setIsEditing={setIsEditing}
            handleAddressDelete={handleAddressDelete}
            setShowCard={setShowCard}
            showCard={showCard}
            isAddressPage={isAddressPage}
            selectedAddress={selectedAddress}
            handleAddressSelect={handleAddressSelect}
          />
        ))}
        {isEditing && (
          <AddressForm
            onFormEdit={handleAddressEdit}
            setIsEditing={setIsEditing}
            editAddress={editAddress}
            isEditForm
            setShowCard={setShowCard}
            showCard={showCard}
          />
        )}
        {!showForm && (
          <div
            className="addNewAddress-header"
            onClick={() => setShowForm(true)}
          >
            <p> + Add New Address</p>
          </div>
        )}
        {showForm && (
          <AddressForm
            setShowForm={setShowForm}
            onFormSubmit={handleAddNewAddress}
          />
        )}
      </div>
    </div>
  );
};

export default AddressList;
