"use client"

import { useRef, useState } from "react";
import { Container, LinkContainer, LinkIcon, LinkIconImage, HiddenInput, MainButton, MainButtonIcon, Modal, ModalBackground, ModalCloseButton, ModalCloseButtonIcon, ModalImagePreview, ModalInput, ModalInputContainer, ModalLabel, ModalSubmit, ModalSubmitLoading, ModalTitle } from "./styles"
import { useForm } from "react-hook-form";
import { userId } from "@/lib/constants";
import Result from "../Result";

const Footbar = () => {

  const fileInputRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState();

  const photoButtonHandler = () => {
    fileInputRef.current.click();
  }

  const [fileBase64, setFileBase64] = useState();
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if(file){
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileBase64(reader.result);
        setModalOpen(true);
      };
      reader.readAsDataURL(file);
    }
  }

  const getFormatDate = date => {
    const localDate = new Date(date);
    localDate.setHours(localDate.getHours() - localDate.getTimezoneOffset() / 60);
    return localDate.toISOString().slice(0, 16);
  }

  const { register, handleSubmit } = useForm();

  const onSubmit = async(data) => {
    setIsLoading(true);
    setModalOpen(false);
    try {
      const response = await fetch("/api/capture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          image: fileBase64,
          user_id: userId
        })
      });
      const json = await response.json();
      console.log(json);
      setResponseData(json);
    } catch(err) {
      console.log(err);
      alert("An error has occurred, please try again");
    } finally {
      setIsLoading(false);
    }
  }

  const closeResult = () => {
    setModalOpen(false);
    setResponseData(undefined);
    setIsLoading(false);
  }

  return (
    <>
      {(responseData || isLoading) && <Result data={responseData?.data} isLoading={isLoading} closeModal={closeResult} />}
      {modalOpen && <>
          <ModalBackground />
          <Modal onSubmit={handleSubmit(onSubmit)}>
            <ModalCloseButton onClick={() => setModalOpen(false)}>
              <ModalCloseButtonIcon src="/img/close.png" width={24} height={24} alt="X" />
            </ModalCloseButton>
            <ModalTitle>New sighting</ModalTitle>
            {fileBase64 && <ModalImagePreview src={fileBase64} alt="Image preview" width={200} height={200} />}
            <ModalInputContainer>
              <ModalLabel>Location</ModalLabel>
              <ModalInput type="text" {...register("location")} />
            </ModalInputContainer>
            <ModalInputContainer>
              <ModalLabel>Date</ModalLabel>
              <ModalInput type="datetime-local" defaultValue={getFormatDate(new Date())} {...register("date")} />
            </ModalInputContainer>
            <ModalInputContainer>
              <ModalLabel>Note</ModalLabel>
              <ModalInput type="text" {...register("caption")} />
            </ModalInputContainer>
            <ModalSubmit type="submit" disabled={isLoading}>
              {isLoading ? <ModalSubmitLoading src="/img/loading.png" width={30} height={30} alt="Loading..." /> : "Submit"}
            </ModalSubmit>
          </Modal>
        </>
      }
      <Container>
      <LinkContainer>
        <LinkIcon href="/" selected={true}>
          <LinkIconImage src="/img/homeIcon.png" width={31} height={34} alt="home" />
        </LinkIcon>
      </LinkContainer>
        <HiddenInput type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} />
      <MainButton onClick={photoButtonHandler}>
        <MainButtonIcon src="/img/photoIcon.png" width={46} height={45} alt="picture" />
      </MainButton>
      <LinkContainer>
        <LinkIcon href="/album" selected={false}>
          <LinkIconImage src="/img/albumIcon.png" width={48} height={34} alt="album" />
        </LinkIcon>
      </LinkContainer>
    </Container>
    </>
  )
}


export default Footbar