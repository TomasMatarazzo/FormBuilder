import { InputReference } from "../StyledComponents/Inputs";
import { useState } from "react";
import styled from "styled-components";
import { ClassicButton } from "../StyledComponents/Buttons";

const FormCard = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background: linear-gradient(
      to left top,
      rgba(255,255,255,0.8),
      rgba(255,255,255,0.2)
    );
    border-radius: 1rem;
    margin:2rem;
    padding:2rem;
    box-shadow: 6px 6px 20px rgba(122,122,122,0.2)

`

export const CompleteReference = (props) => {
  return (
    <FormCard>
      <InputReference
        title="Name of Reference"
        value={props.references["name"]}
        onChange={props.handleReference}
        id={props.references["id"]}
        name="name"
      ></InputReference>
      <InputReference
        title="Page of the reference"
        value={props.references["page"]}
        onChange={props.handleReference}
        id={props.references["id"]}
        name="page"
      ></InputReference>
      <InputReference
        title="Name of person"
        value={props.references["referenceName"]}
        id={props.references["id"]}
        onChange={props.handleReference}
        name="referenceName"
      ></InputReference>
      <InputReference
        title="Email Reference"
        value={props.references["email"]}
        id={props.references["id"]}
        onChange={props.handleReference}
        name="email"
      ></InputReference>
      <InputReference
        title="Phone Reference"
        value={props.references["phone"]}
        id={props.references["id"]}
        onChange={props.handleReference}
        name="phone"
      ></InputReference>

      <div className="buttons-box">
        <ClassicButton color="rgb(103, 227, 130)"
          onClick={props.deleteReference()}
          id={props.references["id"]}
        >Delete Reference
        </ClassicButton>
        <div
          className="submit"
          id={props.references["id"]}
          onClick={props.deleteReference()}
        >
          Delete Reference
        </div>
      </div>
    </FormCard>
  );
};
