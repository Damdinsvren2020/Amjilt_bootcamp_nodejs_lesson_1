exports.getBanners = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Banners",
  });
};

exports.getBanner = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id}`,
  });
};

exports.createBanner = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Banner create",
  });
};

exports.updateBanner = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id}`,
  });
};

exports.deleteBanner = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id}`,
  });
};
