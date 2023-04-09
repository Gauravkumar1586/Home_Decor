import React from 'react';
import { Card ,Label ,TextInput,Checkbox,Button } from 'flowbite-react';

export default function Signin() {
  return (
    <div>
    {/* This is a React component that renders a sign-in form with an email input, password input,
    remember me checkbox, and submit button. It uses the Flowbite-React library to create the UI
    elements such as Card, Label, TextInput, Checkbox, and Button. The form is wrapped in a Card
    component for styling purposes, and the inputs are wrapped in divs with some classes for layout.
  The component exports a default function called Signin. */}
    <div className="">
    <Card>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required={true} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  </div>
    </div>
  )
}
