(() => {
    modal = document.querySelector("[data-modal]");



    let openModalBtns = document.querySelectorAll('[data-modal-open]');
    let closeModalBtns = document.querySelectorAll('[data-modal-close]');

    openModalBtns.forEach( e => {
      e.addEventListener('click', toggleModal);
    });
    closeModalBtns.forEach( e => {
      e.addEventListener('click', toggleModal);
    });

    // refs = {
    //   openModalBtn: document.querySelector("[data-modal-open]"),
    //   closeModalBtn: document.querySelector("[data-modal-close]"),
    // };
  
    // refs.openModalBtn.addEventListener("click", toggleModal);
    // refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      modal.classList.toggle("is-hidden");
    }
  })();