import React, { useEffect } from "react";
import api from '../utils/api';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function App() {
  const [isProfilePopupOpened, setIsProfilePopupOpened] = React.useState(false)
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([user, cards]) => {
      setCurrentUser(user);  
      setCards(cards);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  function handleUpdateUser(data) {
    api.editUser(data).then((newUser) => {
      setCurrentUser(newUser);
      closeAllPopups();
    }).catch((err) => {
      console.error(err);
    });
  }

  function handleUpdateAvatar(data) {
    api.updateAvatar(data).then((newAvatar) => {
      setCurrentUser(newAvatar);
      closeAllPopups();
    }).catch((err) => {
      console.error(err);
    });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
  
    if (!isLiked) {
      api.setLike(card._id).then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      }).catch((err) => {
        console.error(err);
      });
    } else {
      api.deleteLike(card._id).then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      }).catch((err) => {
        console.error(err);
      });
    }
  }

  function handleAddPlaceSubmit(data) {
    api.postCard(data).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    }).catch((err) => {
      console.error(err);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card).then(() => {
      setCards((items) => items.filter((c) => c._id !== card._id && c));
    }).catch((err) => {
      console.error(err);
    });
  }


  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handlePopupCloseClick(evt) {
    if (evt.target.classList.contains('popup')) {
      closeAllPopups();
    }
  }

  function closeAllPopups() {
    setIsProfilePopupOpened(false);
    setisEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  useEffect(() => {
    if (isProfilePopupOpened || isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard) {
      function handleEsc(evt) {
        if (evt.key === 'Escape') {
          closeAllPopups();
        }
      }

      document.addEventListener('keydown', handleEsc);

      return () => {
        document.removeEventListener('keydown', handleEsc);
      }
    }
  }, [isProfilePopupOpened, isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, selectedCard]);

  
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__contant">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}/>
        <Footer />
        
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}   
          onCloseClick={handlePopupCloseClick} 
          onClose={closeAllPopups}
          onSubmit={handleUpdateUser}   
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onCloseClick={handlePopupCloseClick} 
          onClose={closeAllPopups} 
          onSubmit={handleAddPlaceSubmit}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onCloseClick={handlePopupCloseClick} 
          onClose={closeAllPopups} 
          onSubmit={handleUpdateAvatar}
        />
        <ImagePopup 
          card={selectedCard} 
          onCloseClick={handlePopupCloseClick}
          onClose={closeAllPopups}
        />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;