

import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import axios from "axios";


const MarketPlace = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    kmsOnOdometer: 0,
    accidentsReported: 0,
    previousBuyers: 0,
    registrationPlace: "",
    description: "",
    currentPrice: 0,
    majorScratches: false,
    originalPaint: true,
    oemSpecs: "",
  });

  const fetchData = () => {
    axios
      .get("https://lemon-earthworm-tie.cyclic.cloud/MarketplaceInventory")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item._id === id);

    if (itemToEdit) {
      setEditItemId(id);
      setFormData({
        image: itemToEdit.image,
        title: itemToEdit.title,
        kmsOnOdometer: itemToEdit.kmsOnOdometer,
        accidentsReported: itemToEdit.accidentsReported,
        previousBuyers: itemToEdit.previousBuyers,
        registrationPlace: itemToEdit.registrationPlace,
        description: itemToEdit.description,
        currentPrice: itemToEdit.currentPrice,
        majorScratches: itemToEdit.majorScratches,
        originalPaint: itemToEdit.originalPaint,
        oemSpecs: itemToEdit.oemSpecs,
      });
      onOpen();
    }
  };

  const handleCloseModal = () => {
    setEditItemId(null);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const parsedValue = type === "number" ? parseFloat(value) : value;

    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  const handleUpdate = () => {
    // Create an updated data object with the edited values
    const updatedData = {
      ...formData,
    };

    axios
      .patch(`https://lemon-earthworm-tie.cyclic.cloud/MarketplaceInventory/update/${editItemId}`, updatedData)
      .then((response) => {
        console.log("Data updated successfully:", response.data);
        // Refresh data from the server
        fetchData();
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        // Handle errors here
      });
  };

  const handleDelete=(id)=>{
    axios
    .patch(`https://lemon-earthworm-tie.cyclic.cloud/MarketplaceInventory/update/${id}`)
    .then((response) => {
      console.log("Data deleted successfully");
      // Refresh data from the server
      fetchData();
     
    })
    .catch((error) => {
      console.error("Error deleted data:", error);
      // Handle errors here
    });
  }

  return (
    <>
      {data.map((el) => (
        <div key={el._id}>
          <div
            style={{
              border: "1px solid black",
              width: "80%",
              height: "300px",
              margin: "auto",
              display: "flex",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                border: "1px solid black",
                width: "40%",
                height: "300px",
              }}
            >
              <img src={el.image} alt="" />
            </div>
            <div
              style={{
                border: "1px solid black",
                width: "30%",
                height: "300px",
              }}
            >
              <p>title:{el.title}</p>
              <p>kms on odometer {el.kmsOnOdometer}</p>
              <p>majorScratches : {el.majorScratches}</p>
              <p>originalPaint : {el.originalPaint}</p>
              <p>previousBuyers : {el.accidentsReported}</p>
              <p>registrationPlace :{el.registrationPlace} </p>
              <p>currentPrice :{el.currentPrice} </p>
              <Button
                onClick={() => {
                  handleEdit(el._id);
                  onOpen();
                }}
              >
                edit
              </Button>

              <Button marginLeft={"20px"} onClick={()=>handleDelete(el._id)}>delete</Button>
            </div>
            <div
              style={{
                border: "1px solid black",
                width: "30%",
                height: "300px",
              }}
            >
              <p>description</p>
              <p>mileage {el.oemSpecs.mileage}</p>
              <p>power {el.oemSpecs.power}</p>
              <p>max speed {el.oemSpecs.maxSpeed}</p>
              <p>list price {el.oemSpecs.listPrice} </p>
              <p></p>
              <p></p>
            </div>
          </div>
          {/* <Button onClick={() => handleEdit(el._id)}>Edit</Button> */}
        </div>
      ))}

      {/* Modal for editing */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Car Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              border={"1px solid black"}
              placeholder="Image URL"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
            <Input
              border={"1px solid black"}
              marginTop={"10px"}
              placeholder="Title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <Input
              border={"1px solid black"}
              marginTop={"10px"}
              placeholder="Kms on Odometer"
              type="number"
              name="kmsOnOdometer"
              value={formData.kmsOnOdometer}
              onChange={handleChange}
            />
            <Input
              border={"1px solid black"}
              marginTop={"10px"}
              placeholder="Accidents Reported"
              type="xt"
              name="accidentsReported"
              value={formData.accidentsReported}
              onChange={handleChange}
            />
            <Input
              border={"1px solid black"}
              marginTop={"10px"}
              placeholder="Previous Buyers"
              type="number"
              name="previousBuyers"
              value={formData.previousBuyers}
              onChange={handleChange}
            />
            <Input
              border={"1px solid black"}
              marginTop={"10px"}
              placeholder="Registration Place"
              type="text"
              name="registrationPlace"
              value={formData.registrationPlace}
              onChange={handleChange}
            />
            <Input
              border={"1px solid black"}
              marginTop={"10px"}
              placeholder="Description"
              type="number"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />

            <Input
              border={"1px solid black"}
              marginTop={"10px"}
              placeholder="Current Price"
              type="number"
              name="currentPrice"
              value={formData.currentPrice}
              onChange={handleChange}
            />

            <Input
              border={"1px solid black"}
              marginTop={"10px"}
              placeholder="Major Scratch"
              type="text"
              name=" majorScratches"
              value={formData.majorScratches}
              onChange={handleChange}
            />
            <Input
              border={"1px solid black"}
              marginTop={"10px"}
              placeholder="Original paint"
              type="text"
              name="originalPaint"
              value={formData.originalPaint}
              onChange={handleChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              // onClick={() => {
                // Add your update logic here
                // console.log("Updating data:", formData);
                onClick={handleUpdate}
              // }}
            >
              Update Data
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MarketPlace;
