import { Fragment } from "react";
import { Router } from "@reach/router"
import Photos from "./Photos";

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Photos path="/" />
    </Router>
  )
}