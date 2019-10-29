import React from "react";
import { Form, Button, EDgrid } from "../src";

export default {
  title: "Form"
};

export const FormSample = () => (
  <Form>
    <Form.FormItem>
      <Form.Input type="text" placeholder="Input your name" id="name" />
    </Form.FormItem>
    <Form.FormItem>
      <Form.Input type="email" placeholder="Input your email" />
    </Form.FormItem>
    <Form.FormItem>
      <Form.Input type="password" placeholder="Input your password" />
    </Form.FormItem>
    <Button full type="submit">
      Submit
    </Button>
  </Form>
);

export const FormWithGrid = () => (
  <Form>
    <EDgrid small={1} medium={2} gap={2} rowsGap>
      <Form.Input type="text" placeholder="Input your name" id="name" />
      <Form.Input type="text" placeholder="Input your lastname" id="lastname" />
      <Form.Input type="text" placeholder="Input your city" id="city" />
      <Form.Input type="text" placeholder="Input your country" id="country" />
      <Form.Select>
        <option>America</option>
        <option>Europe</option>
      </Form.Select>
      <Form.TextArea
        placeholder="Input your biography"
        className="s-cols-1 m-cols-2"
      />
      <Button full type="submit" className="s-cols-1 m-cols-2">
        Submit
      </Button>
    </EDgrid>
  </Form>
);
