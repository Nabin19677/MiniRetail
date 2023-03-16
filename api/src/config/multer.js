import multer from "multer";
import path from "path";
import * as fs from "fs"
import {UnrecognizedFieldError} from "../app/util/errors/http.js" 

const IMGS_DIR = "public/images"
const DOCS_DIR = "public/documents"

if(!fs.existsSync(IMGS_DIR)){
  fs.mkdirSync(IMGS_DIR,{ recursive: true })
}
if(!fs.existsSync(DOCS_DIR)){
  fs.mkdirSync(DOCS_DIR,{ recursive: true })
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (["image/jpeg", "image/jpg", "image/png"].includes(file.mimetype)) {
        cb(null, IMGS_DIR);
    } else {
        cb(null, DOCS_DIR);
    }
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

function fileFilter(req, file, cb) {
  if (
    ["image/jpeg", "image/jpg", "image/png", "application/pdf"].includes(
      file.mimetype
    )
  ) {
    cb(null, true);
  } else {
    cb(new UnrecognizedFieldError("Unrecognized file format"));
  }
}

const upload = multer({ storage: storage, fileFilter });

export { upload };
