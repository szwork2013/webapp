import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    let path;

    switch (this.props.name) {
      case 'forums':
        path = 'M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0  ,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z';
        break;

      case 'events':
        path = 'M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z';
        break;

      case 'chat':
        path = 'M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M5,5V7H19V5H5M5,9V11H13V9H5M5,13V15H15V13H5Z';
        break;

      case 'contacts':
        path = 'M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z';
        break;

      case 'share':
        path = 'M3.75,17L8,12.75V16H18V11.5L20,9.5V16A2,2 0 0,1 18,18H8V21.25L3.75,17M20.25,7L16,11.25V8H6V12.5L4,14.5V8A2,2 0 0,1 6,6H16V2.75L20.25,7Z';
        break;

      case 'spank':
        path = 'M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V10.09L23,12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z';
        break;

      case 'pencil':
        path = 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z';
        break;

      case 'message':
        path = 'M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V8L12,13L20,8V18M20,6L12,11L4,6V6H20V6Z';
        break;

      case 'camera':
        path = 'M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z';
        break;

      case 'topic':
        path = 'M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18';
        break;

      case 'post':
        path = 'M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M6,7H18V9H6V7M6,11H15V13H6V11Z';
        break;

      case 'bell':
        path = 'M16,17H7V10.5C7,8 9,6 11.5,6C14,6 16,8 16,10.5M18,16V10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18M11.5,22A2,2 0 0,0 13.5,20H9.5A2,2 0 0,0 11.5,22Z';
        break;

      case 'nav':
        path = 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z';
        break;

      case 'comments':
        path = 'M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M6,7H18V9H6V7M6,11H15V13H6V11Z';
        break;

      case 'back':
        path = 'M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z';
        break;

      case 'send':
        path = 'M2,21L23,12L2,3V10L17,12L2,14V21Z';
        break;

      case 'plus':
        path = 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z';
        break;

      case 'dots-vertical':
        path = 'M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z';
        break;

      case 'play':
        path = 'M12,20.14C7.59,20.14 4,16.55 4,12.14C4,7.73 7.59,4.14 12,4.14C16.41,4.14 20,7.73 20,12.14C20,16.55 16.41,20.14 12,20.14M12,2.14A10,10 0 0,0 2,12.14A10,10 0 0,0 12,22.14A10,10 0 0,0 22,12.14C22,6.61 17.5,2.14 12,2.14M10,16.64L16,12.14L10,7.64V16.64Z';
        break;

      case 'userinfo':
        path = 'M18,16H6V15.1C6,13.1 10,12 12,12C14,12 18,13.1 18,15.1M12,5.3C13.5,5.3 14.7,6.5 14.7,8C14.7,9.5 13.5,10.7 12,10.7C10.5,10.7 9.3,9.5 9.3,8C9.3,6.5 10.5,5.3 12,5.3M19,2H5C3.89,2 3,2.89 3,4V18A2,2 0 0,0 5,20H9L12,23L15,20H19A2,2 0 0,0 21,18V4C21,2.89 20.1,2 19,2Z';
        break;

      case 'photos':
        path = 'M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6';
        break;

      case 'checklist':
        path = 'M7,13H21V11H7M7,19H21V17H7M7,7H21V5H7M2,11H3.8L2,13.1V14H5V13H3.2L5,10.9V10H2M3,8H4V4H2V5H3M2,17H4V17.5H3V18.5H4V19H2V20H5V16H2V17Z';
        break;

      case 'feed':
        path = 'M2,3V6H21V3M20,8H3A1,1 0 0,0 2,9V15A1,1 0 0,0 3,16H20A1,1 0 0,0 21,15V9A1,1 0 0,0 20,8M2,21H21V18H2V21Z';
        break;

      case 'birthday':
        path = 'M12,6C13.11,6 14,5.1 14,4C14,3.62 13.9,3.27 13.71,2.97L12,0L10.29,2.97C10.1,3.27 10,3.62 10,4A2,2 0 0,0 12,6M16.6,16L15.53,14.92L14.45,16C13.15,17.29 10.87,17.3 9.56,16L8.5,14.92L7.4,16C6.75,16.64 5.88,17 4.96,17C4.23,17 3.56,16.77 3,16.39V21A1,1 0 0,0 4,22H20A1,1 0 0,0 21,21V16.39C20.44,16.77 19.77,17 19.04,17C18.12,17 17.25,16.64 16.6,16M18,9H13V7H11V9H6A3,3 0 0,0 3,12V13.54C3,14.62 3.88,15.5 4.96,15.5C5.5,15.5 6,15.3 6.34,14.93L8.5,12.8L10.61,14.93C11.35,15.67 12.64,15.67 13.38,14.93L15.5,12.8L17.65,14.93C18,15.3 18.5,15.5 19.03,15.5C20.11,15.5 21,14.62 21,13.54V12A3,3 0 0,0 18,9Z';
        break;

      case 'person':
        path = 'M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z';
        break;

      case 'male':
        path = 'M9,9C10.29,9 11.5,9.41 12.47,10.11L17.58,5H13V3H21V11H19V6.41L13.89,11.5C14.59,12.5 15,13.7 15,15A6,6 0 0,1 9,21A6,6 0 0,1 3,15A6,6 0 0,1 9,9M9,11A4,4 0 0,0 5,15A4,4 0 0,0 9,19A4,4 0 0,0 13,15A4,4 0 0,0 9,11Z';
        break;

      case 'female':
        path = 'M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V18H15V20H13V22H11V20H9V18H11V15.92C8.16,15.44 6,12.97 6,10A6,6 0 0,1 12,4M12,6A4,4 0 0,0 8,10A4,4 0 0,0 12,14A4,4 0 0,0 16,10A4,4 0 0,0 12,6Z';
        break;

      case 'trans':
        path = 'M19.58,3H15V1H23V9H21V4.41L16.17,9.24C16.69,10.03 17,11 17,12C17,14.42 15.28,16.44 13,16.9V19H15V21H13V23H11V21H9V19H11V16.9C8.72,16.44 7,14.42 7,12C7,11 7.3,10.04 7.82,9.26L6.64,8.07L5.24,9.46L3.83,8.04L5.23,6.65L3,4.42V8H1V1H8V3H4.41L6.64,5.24L8.08,3.81L9.5,5.23L8.06,6.66L9.23,7.84C10,7.31 11,7 12,7C13,7 13.96,7.3 14.75,7.83L19.58,3M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z';
        break;

      case 'heart':
        path = 'M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z';
        break;

      default:
        path = 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z';
        break;
    }

    const className = `icon icon_${this.props.name}`;
    return (
      <svg className={className} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
        <path d={path} />
      </svg>
    );
  }
}
