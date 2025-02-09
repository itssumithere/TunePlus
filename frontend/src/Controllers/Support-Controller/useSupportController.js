import React, { useContext, useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { base } from '../../Constants/Data.constant';
import { getData, postData, postDataContent } from '../../Services/Ops';
const useSupportController = (props) => {
  const [issueType, setIssueType] = useState("Apple motion submission");
  const [email, setEmail] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [motionType, setMotionType] = useState("--None--");
  const [motionLink, setMotionLink] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [supportList, setSupportList] = useState([])
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setAttachments(Array.from(e.target.files));
  };

  useEffect(() => {
    getsupportList();
  }, [props])
  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = {
      "issueType": issueType,
      "email": email,
      "clientNumber": clientNumber,
      "country": country,
      "description": description,
      "motionType": motionType,
      "motionLink": "",
      "attachments": attachments
    }

    try {
      const result = await postDataContent(base.addSupport, body);
      console.log("Server Response:", result);

      if (result.status === true) {
        Swal.fire("Success", result.data.message, "success");
        getsupportList();
        // navigate("/support", { replace: true, state: { reload: Date.now() } });
      } else {
        Swal.fire("Error", result.data.message, "error");

      }
    } catch (error) {
      console.error("Error Submitting form:", error);
      Swal.fire("Error", "Something went wrong. Please try again later.", "error");
    }
  };

  const getsupportList = async () => {
    let result = await getData(base.supportList);
    console.log("----------",result)
    if (result.status === true) {
      setSupportList(result.data);
    } else {
      Swal.fire("Error", result.data.message, "error");
    }
  }


  return {
    // States
    issueType,
    email,
    clientNumber,
    country,
    description,
    motionType,
    motionLink,
    attachments,
    // State setters
    setIssueType,
    setEmail,
    setClientNumber,
    setCountry,
    setDescription,
    setMotionType,
    setMotionLink,
    setAttachments,
    // Handlers
    handleFileChange,
    handleSubmit,
    supportList
  }

}
export default useSupportController;