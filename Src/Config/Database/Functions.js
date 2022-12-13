import firebase from "firebase";

let Sign_Up_User = (email, username, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user.user.uid);
        firebase
          .firestore()
          .collection("User")
          .doc(user.user.uid)
          .set({
            email,
            username,
          })
          .then(() => {
            resolve("Signup Successfully");
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

let Login_In_User = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve("Sign In Successfully");
      })
      .catch((error) => {
        reject(error);
      });
  });
};

let Add_New_Trip = (city, country, date) => {
  return new Promise((resolve, reject) => {
    let user = firebase.auth().currentUser;

    firebase
      .firestore()
      .collection("trip")
      .add({
        city,
        country,
        date,
        userUid: user.uid,
      })
      .then(() => {
        resolve("SUCCESSFULLY ADDED");
      })
      .catch((error) => {
        reject(error);
      });
  });
};

let Add_Expense_of_Trip = (for_What, Total_Expense, category, id) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("trip")
      .doc(id)
      .collection("Expense")
      .add({
        for_What,
        Total_Expense,
        category,
      })
      .then(() => {
        resolve("SUCCESSFULLY ADDED");
      })
      .catch((error) => {
        reject(error);
      });
  });
};

let Get_Trip = () => {
  return new Promise((resolve, reject) => {
    try {
      let Trips = [];
      let user = firebase.auth().currentUser;

      firebase
        .firestore()
        .collection("trip")
        .where("userUid", "==", user.uid)
        .get()
        .then((snap) => {
          if (snap.empty) {
            resolve(Trips);
          } else {
            snap.forEach((doc) => {
              let trip = doc.data();
              trip.id = doc.id;
              Trips.push(trip);
            });
            resolve(Trips);
          }
        });
    } catch (error) {
      reject(error);
    }
  });
};

let Get_Trip_Expense = (id) => {
  return new Promise((resolve, reject) => {
    try {
      let Expenses = [];
      let user = firebase.auth().currentUser;

      firebase
        .firestore()
        .collection("trip")
        .doc(id)
        .collection("Expense")
        .get()
        .then((snap) => {
          if (snap.empty) {
            resolve(Expenses);
          } else {
            snap.forEach((doc) => {
              let expense = doc.data();
              expense.id = doc.id;
              Expenses.push(expense);
            });
            resolve(Expenses);
          }
        });
    } catch (error) {
      reject(error);
    }
  });
};

let Delet_Trip = async (id) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("trip")
      .doc(id)
      .delete()
      .then(() => {
        resolve("Deleted");
      })
      .catch((error) => {
        reject(error);
      });
  });
};

let Get_Current_User = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .firestore()
          .collection("User")
          .doc(user.uid)
          .get()
          .then((doc) => {
            resolve(doc.data());
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  });
};
export {
  Sign_Up_User,
  Login_In_User,
  Add_New_Trip,
  Get_Trip,
  Delet_Trip,
  Add_Expense_of_Trip,
  Get_Trip_Expense,
  Get_Current_User,
};
