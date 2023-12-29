import ReactDOM from 'react-dom';
import Gallery from './Gallery';
import '../styles/checkavailiability.css';

const closePopup = () => {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
  modal.remove();
};

const openPopup = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const closeSpan = document.createElement('span');
  closeSpan.className = 'close';
  closeSpan.setAttribute('role', 'button');
  closeSpan.setAttribute('tabIndex', '0');
  closeSpan.textContent = '×';
  closeSpan.addEventListener('click', closePopup);
  closeSpan.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      closePopup();
    }
  });

  const heading = document.createElement('h2');
  heading.textContent = 'Room A';

  // Replace 'yourImageArray' with your actual array of image objects
  const yourImageArray = [
    { url: 'https://cf.bstatic.com/xdata/images/hotel/max500/440973240.jpg?k=04d446de4af749f6d0d13c5873529e0022fde9689b8e3fc96d667ddc0a02e0b7&o=&hp=1' },
    { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/440973229.jpg?k=2d550c4c78b5616d2eef61fb01ab896217302a9649c5c1fcba7e17195ca70e07&o=&hp=1' },
  ];

  // Render the Gallery component using ReactDOM
  const galleryContainer = document.createElement('div');
  ReactDOM.createRoot(galleryContainer).render(<Gallery images={yourImageArray} />);

  modalContent.appendChild(closeSpan);
  modalContent.appendChild(heading);

  // Add a new div for two columns
  const columnsContainer = document.createElement('div');
  columnsContainer.classList.add('columns-container');

  // Add the Gallery component to the left column
  const leftColumn = document.createElement('div');
  leftColumn.classList.add('left-column');
  leftColumn.appendChild(galleryContainer);

  // Add the provided HTML to the right column
  const rightColumn = document.createElement('div');
  rightColumn.classList.add('right-column');
  rightColumn.innerHTML = `
  <div class="hprt-lightbox-book" data-et-view="aaOYFbWHWCPWcEXO:2">
    <div class="hprt-lightbox-book-conditions">
      <div>
        <span class="jq_tooltip" data-title="Max. people: 1">
          <i class="bicon bicon-occupancy"></i>
        </span>
        <strong>6-Bed Mixed Dormitory Room</strong>
        <ul class="hprt-conditions-bui bui-list bui-list--text bui-list--icon bui-u-margin-top--8 bui-f-font-caption">
          <li class="bui-list__item e2e-cancellation" data-testid="cancellation-subtitle">
            <div class="bui-group bui-group--inline bui-group--wrap-nowrap tpex-policy-free-cancellation" data-testid="cancellation-policy" style="display: inline-flex">
              <!-- Room Size Icon -->
              <div class="bui-group__item" style="line-height: var(--bui_font_small_1_line-height);">
                <span class="bui-icon bui-icon--small" style="position: relative; vertical-align: middle;" role="presentation">
                  <svg class="bk-icon" fill="#333" height="16" width="16" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                    <path d="M19 12h-2V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v4H5a3 3 0 0 0-3 3v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5a3 3 0 0 0-3-3z"/>
                  </svg>
                </span>
                <span class="icon-description">Room Size: 25 m²</span>
              </div>
              <!-- Balcony Icon -->
              <div class="bui-group__item" style="line-height: var(--bui_font_small_1_line-height);">
                <span class="bui-icon bui-icon--small" style="position: relative; vertical-align: middle;" role="presentation">
                  <svg class="bk-icon" fill="#333" height="16" width="16" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                    <path d="M2 2v20h20V2H2zm18 18H4V4h16v16z"/>
                  </svg>
                </span>
                <span class="icon-description">Balcony: Yes</span>
              </div>
              <!-- Bathtub Icon -->
              <div class="bui-group__item" style="line-height: var(--bui_font_small_1_line-height);">
                <span class="bui-icon bui-icon--small" style="position: relative; vertical-align: middle;" role="presentation">
                  <svg class="bk-icon" fill="#333" height="16" width="16" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                    <path d="M19 12h-2V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v4H5a3 3 0 0 0-3 3v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5a3 3 0 0 0-3-3zM9 10h6v6H9v-6z"/>
                  </svg>
                </span>
                <span class="icon-description">Bathtub: Yes</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Facilities Section -->
  <div class="facilities">
    <!-- You can enter HTML data for more description here -->
    <p>Facilities:</p>
    <p>Additional description...</p>
  </div>
  <!-- Reserve Button -->
  <button class="reserve-button" onclick="window.location.href='http://localhost:3001/'">Reserve</button>
`;

  // Append the left and right columns to the columns container
  columnsContainer.appendChild(leftColumn);
  columnsContainer.appendChild(rightColumn);

  // Append the columns container to the modal content
  modalContent.appendChild(columnsContainer);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  modal.style.display = 'block';
};

export default openPopup;
