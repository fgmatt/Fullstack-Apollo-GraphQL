import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}
