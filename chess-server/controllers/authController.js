export const handleLogin = (req, res) => {
  try {
    //below code is working , till here everything is working
    const { email, password } = req.body;

    console.log(email, " ", password);

    return res.status(200).json({
      msg: "successfull",
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const handleRegister = (req, res) => {};
