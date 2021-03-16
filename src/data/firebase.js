import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCGlfwzbppTvkwoWoBvSIu8s8rDifEiNIM",
  authDomain: "ex3-produits.firebaseapp.com",
  projectId: "ex3-produits",
  storageBucket: "ex3-produits.appspot.com",
  messagingSenderId: "107490036196",
  appId: "1:107490036196:web:b146ec0c161fcd4a395ff1",
  measurementId: "G-9SF2XZME1R"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;