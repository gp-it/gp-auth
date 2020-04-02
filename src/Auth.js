// import { auth } from '../firebase';

// auth.onAuthStateChanged(() => {
//   window.dispatchEvent(new CustomEvent('auth-change'))
//   }
// );

export class Auth {
  static Test() {
    return 'test réussi';
  }
  // static delete(callback) {
  //   state.auth
  //     .delete()
  //     .then(() => callback({ success: true, text: 'Votre compte a été supprimé' }))
  //     .catch(error => {
  //       console.log(error);
  //       callback({ success: false, text: 'Impossible de supprimer votre compte' });
  //     });
  // }
  // static isAuthenticated() {
  //   return auth.currentUser ? true : false;
  // }

  // static login(login, password) {
  //   auth
  //     .signInWithEmailAndPassword(login, password)
  //     // .then(() => {
  //     //   callback({ sucess: true, text: 'Connexion réussie' });
  //     // })
  //     .catch(error => {
  //       let text = 'Une erreur est survenue';
  //       switch (error.code) {
  //         case 'auth/network-request-failed':
  //           text = 'Aucune connexion internet';
  //           break;
  //         case 'auth/user-not-found':
  //           text = 'Le compte ' + login + " n'existe pas";
  //           break;
  //         case 'auth/wrong-password':
  //           text = 'Mot de passe incorrect';
  //           break;
  //       }
  //       alert(text);
  //     });
  // }

  // static updateEmail(email, callback) {
  //   state.auth
  //     .updateEmail(email)
  //     .then(() => {
  //       callback({ text: 'Votre adresse email a été modifiée', success: true });
  //     })
  //     .catch(error => {
  //       let text = 'Une erreur est survenue';
  //       switch (error.code) {
  //         case 'auth/network-request-failed':
  //           text = 'Aucune connexion internet';
  //           break;
  //         case 'auth/requires-recent-login':
  //           text = 'Vous devez vous reconnecter pour effectuer cette opération';
  //           break;
  //         case 'auth/email-already-in-use':
  //           text = `L'adresse email ${email} est déjà utilisée`;
  //           break;
  //       }
  //       callback({ success: false, text: text });
  //     });
  // }

  // static updatePassword(password, callback) {
  //   state.auth
  //     .updatePassword(password)
  //     .then(() => {
  //       callback({ success: true, text: 'Votre mot de passe a été modifié' });
  //     })
  //     .catch(error => {
  //       let text = 'Une erreur est survenue';
  //       switch (error.code) {
  //         case 'auth/network-request-failed':
  //           text = 'Aucune connexion internet';
  //           break;
  //         case 'auth/requires-recent-login':
  //           text = 'Vous devez vous reconnecter pour effectuer cette opération';
  //           break;
  //       }
  //       callback({ success: false, text: text });
  //     });
  // }
}
