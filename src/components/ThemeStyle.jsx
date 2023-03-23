
export default function ThemeStyle() {

return (
<style type="text/css">
        {`
    a[class*="btn-outline"]  {
      background-color: yellow!important;
      color: black!important;
    }

   body {
    background-color: var(--bs-dark);
    color: yellow;
   }
   .card, .offcanvas.offcanvas-start {
    background-color: var(--bs-dark);
    border-color: yellow;
   }

   .card.text-bg-dark {
    border-bottom-color: yellow!important;
    color: yellow!important;
   }

   a .bi-arrow-right {
        color: black!important;
   }

   i.bi, h1, input[type='text']::placeholder {
    color: yellow;
   }
   .form-control, .form-control:focus, .input-group-text   {
    color: yellow;
    border-bottom: 1px solid yellow;
   }
    `}
      </style>

);
}
