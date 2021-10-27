import { InputReference } from "../StyledComponents/Inputs";
import { useState } from "react";
import styled from "styled-components";
import { ClassicButton } from "../StyledComponents/Buttons";
import { FormCard } from "../AppComponents/Form";

export const CompleteReference = (props) => {
  return (
    <FormCard flex={2}>
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
      <ClassicButton color="rgb(231, 106, 106)"
        onClick={props.deleteReference()}
        id={props.references["id"]}
      >Delete Reference
      </ClassicButton>
    </FormCard>
  );
};
