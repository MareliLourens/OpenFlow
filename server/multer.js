const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

const uploadFields = upload.fields([
  { name: 'question_img', maxCount: 1 }
]);
