import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import FooterBtns from "./FooterBtns";
import TextField from "@mui/material/TextField";
import { handleRequired } from "../../utility/Utility";
import { handleCustomerInfo } from "../../redux/actions/productsActions";

const CustomerInformations = ({ handleBack, handleNext, steps }) => {
  const [name, setName] = useState({ value: "", error: false });
  const [surname, setSurname] = useState({ value: "", error: false });
  const [phone, setPhone] = useState({ value: "", error: false });
  const [mail, setMail] = useState({ value: "", error: false });
  const [address, setAddress] = useState({ value: "", error: false });

  const dispatch = useDispatch();
  const customerInfo = useSelector((state) => state.user.customerInfo);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const isRequired = handleRequired(name, value);

    let setStateName;
    switch (name) {
      case "Name":
        setStateName = setName;
        break;
      case "Surname":
        setStateName = setSurname;
        break;
      case "Phone":
        setStateName = setPhone;
        break;
      case "Mail":
        setStateName = setMail;
        break;
      case "Address":
        setStateName = setAddress;
        break;
      default:
        break;
    }

    setStateName({ value: value, error: isRequired });
  };

  const IsNextValid = () => {
    const isValid = isValidPersonalInfo();
    handleNext(isValid);

    if (isValid) {
      dispatch(
        handleCustomerInfo({
          name: name.value,
          surname: surname.value,
          phone: phone.value,
          mail: mail.value,
          address: address.value,
        })
      );
    }
  };

  const isValidPersonalInfo = () => {
    const nameValid = handleRequired("Name", name.value);
    const surnameValid = handleRequired("Surname", surname.value);
    const phoneValid = handleRequired("Phone", phone.value);
    const mailValid = handleRequired("Mail", mail.value);
    const addressValid = handleRequired("Address", address.value);

    setName({ value: name.value, error: nameValid });
    setSurname({
      value: surname.value,
      error: surnameValid,
    });
    setPhone({
      value: phone.value,
      error: phoneValid,
    });
    setMail({
      value: mail.value,
      error: mailValid,
    });
    setAddress({
      value: address.value,
      error: addressValid,
    });

    return !(
      nameValid ||
      surnameValid ||
      phoneValid ||
      mailValid ||
      addressValid
    );
  };

  useEffect(() => {
    const { name, surname, phone, mail, address } = customerInfo;

    setName({ value: name, error: false });
    setSurname({
      value: surname,
      error: false,
    });
    setPhone({
      value: phone,
      error: false,
    });
    setMail({
      value: mail,
      error: false,
    });
    setAddress({
      value: address,
      error: false,
    });
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            name="Name"
            sx={{ flex: 1 }}
            onChange={handleChange}
            value={name.value}
            error={name.error}
            helperText={name.error ? "Cannot be empty" : ""}
            className={name.error ? "input__error" : "input__valid"}
          />
          <TextField
            id="standard-basic"
            label="Surname"
            variant="standard"
            name="Surname"
            sx={{ flex: 1 }}
            onChange={handleChange}
            value={surname.value}
            error={surname.error}
            helperText={surname.error ? "Cannot be empty" : ""}
            className={surname.error ? "input__error" : "input__valid"}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <TextField
            id="standard-basic"
            label="Phone"
            variant="standard"
            name="Phone"
            sx={{ flex: 1 }}
            onChange={handleChange}
            value={phone.value}
            error={phone.error}
            helperText={phone.error ? "Not valid phone number" : ""}
            className={phone.error ? "input__error" : "input__valid"}
          />
          <TextField
            id="standard-basic"
            label="Mail"
            variant="standard"
            name="Mail"
            sx={{ flex: 1 }}
            onChange={handleChange}
            value={mail.value}
            error={mail.error}
            helperText={mail.error ? "Not valid mail address" : ""}
            className={mail.error ? "input__error" : "input__valid"}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            name="Address"
            sx={{ flex: 1 }}
            onChange={handleChange}
            value={address.value}
            error={address.error}
            helperText={address.error ? "Cannot be empty" : ""}
            className={address.error ? "input__error" : "input__valid"}
          />
        </Box>
      </Box>
      <FooterBtns
        activeStep={0}
        handleBack={handleBack}
        handleNext={IsNextValid}
        steps={steps}
      />
    </>
  );
};

export default CustomerInformations;
