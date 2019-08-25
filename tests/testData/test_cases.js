module.exports = [
  {
    feature: "register and login (FB/Google)",
    scenario: [
      "User unable to register with blank form",
      "User able to register with valid credentials",
      "User unable login FB with blank credential",
      "User unable login Google with blank credential",
      "User unable login FB with valid credential",
      "User unable login Google with valid credential"
    ]
  },
  {
    feature: "Post",
    scenario: [
      "User able to see posts",
      "User unable to put comments without login",
      "User able to login after login"
    ]
  }
]