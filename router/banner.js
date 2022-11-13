const express = require("express");
const router = express.Router();
const {
  getBanners,
  getBanner,
  createBanner,
  updateBanner,
  deleteBanner,
} = require("../controller/banners/banner");
//ehnii alham
// router.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: "Banners",
//   });
// });

// router.get("/:id", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: `${req.params.id}`,
//   });
// });
// router.post("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: "Banner create",
//   });
// });

// router.put("/:id", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: `${req.params.id}`,
//   });
// });

// router.delete("/:id", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: `${req.params.id}`,
//   });
// });

//hoyrdoh alham
router.route("/").get(getBanners);
router.route("/").post(createBanner);
router.route("/:id").get(getBanner);
router.route("/:id").put(updateBanner);
router.route("/:id").delete(deleteBanner);
module.exports = router;
