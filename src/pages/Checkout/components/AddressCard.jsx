const AddressCard = ({
  address,
  handleAddressChange,
  handleAddressDelete,
  setEditAddress,
  setIsEditing,
  setShowCard,
  showCard,
  isAddressPage,
  selectedAddress,
}) => {
  const { id, name, phone, addressText, city, pin, state } = address;

  if (!showCard) {
    return;
  }
  return (
    <div className="address-card-container">
      {!isAddressPage && (
        <input
          type="radio"
          id={id}
          className="address-input"
          value={id}
          checked={selectedAddress?.id === id}
          onChange={(e) => handleAddressChange(e)}
        />
      )}

      <label htmlFor={id} className="address-label">
        <div className="address-details">
          <p>
            <b>{name}</b>
          </p>
          <p>
            <b>Phone:</b> {phone}
          </p>
          <p>{addressText} , {city} - {pin}, {state} </p>
        </div>

        {isAddressPage && (
          <div className="address-btn-group">
            <button
              onClick={() => {
                setEditAddress(address);
                setIsEditing(true);
                setShowCard(false);
              }}
            >
              Edit
            </button>
            <button onClick={() => handleAddressDelete(id)}>Delete</button>
          </div>
        )}
      </label>
    </div>
  );
};

export default AddressCard;
