require("dotenv").config();
require("./server/db-conn");
const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");