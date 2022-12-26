
const UserController = {
  showUserPersonalDataPage: (req, res) =>{

    const {id} = req.params;
    return res.render("user-panel-personal-data.ejs", {id});
  },
  showEditUserPersonalDataPage: (req, res) =>{

    const {id} = req.params;
    return res.render("edit-user-panel-personal-data.ejs", {id});
  }
}


module.exports = UserController;