// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// -----------------------------------------------

export default function ComingSoonIllustration({ ...other }) {
  const theme = useTheme();
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;
  const PRIMARY_DARKER = theme.palette.primary.darker;

  return (
    <Box {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 480 360"
      >
        <defs>
          <linearGradient id="BG" x1="19.496%" x2="77.479%" y1="71.822%" y2="16.69%">
            <stop offset="0%" stopColor={PRIMARY_MAIN} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} stopOpacity="0" />
          </linearGradient>
        </defs>

        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g>
            <path
              fill="url(#BG)"
              fillRule="nonzero"
              d="M0 198.78c0 41.458 14.945 79.236 39.539 107.786 28.214 32.765 69.128 53.365 114.734 53.434a148.44 148.44 0 0056.495-11.036c9.051-3.699 19.182-3.274 27.948 1.107a75.779 75.779 0 0033.957 8.01c5.023 0 9.942-.494 14.7-1.433 13.58-2.67 25.94-8.99 36.09-17.94 6.378-5.627 14.547-8.456 22.897-8.446h.142c27.589 0 53.215-8.732 74.492-23.696 19.021-13.36 34.554-31.696 44.904-53.224C474.92 234.58 480 213.388 480 190.958c0-76.93-59.774-139.305-133.498-139.305-7.516 0-14.88.663-22.063 1.899C305.418 21.42 271.355 0 232.499 0a103.651 103.651 0 00-45.88 10.661c-13.24 6.487-25.011 15.705-34.64 26.939-32.698.544-62.931 11.69-87.676 30.291C25.351 97.155 0 144.882 0 198.781z"
              opacity="0.2"
            />

            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M290.382 112.476v127.776a6.216 6.216 0 01-6.222 6.222H117.467a5.702 5.702 0 01-5.788-6.511V112.194c-.449-3.148 2.329-5.926 5.788-5.926h166.671a6.221 6.221 0 014.411 1.808 6.199 6.199 0 011.833 4.4z"
            />
            <path
              fill={PRIMARY_DARKER}
              fillRule="nonzero"
              d="M210.906 284.487c62.53 0 113.22-4.393 113.22-9.811s-50.69-9.81-113.22-9.81-113.22 4.392-113.22 9.81 50.69 9.811 113.22 9.811z"
              opacity="0.24"
            />
            <path
              fill={PRIMARY_DARK}
              fillRule="nonzero"
              d="M58.7766 78.9925L73.3695 72.9658 153.612 80.4902 153.612 88.123 58.7766 88.4052z"
            />
            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M85.3001 70.6L70.9387 70.6 70.9387 270.104 85.3001 270.104z"
            />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M182.117 239.326h-5.156a1 1 0 00-1 1v48.326a1 1 0 001 1h5.156a1 1 0 001-1v-48.326a1 1 0 00-1-1z"
            />
            <path
              fill="#C4CDD5"
              fillRule="nonzero"
              d="M175.828 265.587L183.034 265.587 183.034 240.909 175.676 240.909z"
              opacity="0.5"
            />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M131.023 239.326h-5.155a1 1 0 00-1 1v46.641a1 1 0 001 1h5.155a1 1 0 001-1v-46.641a1 1 0 00-1-1z"
            />
            <path
              fill="#C4CDD5"
              fillRule="nonzero"
              d="M124.919 265.587L132.125 265.587 132.125 240.909 124.767 240.909z"
              opacity="0.5"
            />
            <path
              fill={PRIMARY_DARKER}
              fillRule="nonzero"
              d="M277.788 125.564h-56.915a3 3 0 00-3 3v83.872a3 3 0 003 3h56.915a3 3 0 003-3v-83.872a3 3 0 00-3-3zM207.689 125.564a3 3 0 013 3v83.887a3 3 0 01-3 3h-56.915a3 3 0 01-3-3v-.316a3 3 0 013-3h29.502a3 3 0 003-3v-77.571a3 3 0 013-3h21.413z"
              opacity="0.48"
            />
            <path
              fill={PRIMARY_DARKER}
              fillRule="nonzero"
              d="M182.077 119.349h-56.915a3 3 0 00-3 3v82.288a3 3 0 003 3h56.915a3 3 0 003-3v-82.288a3 3 0 00-3-3z"
            />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M149.995 88.014h1.049v24.994c9.078-.119 20.028 1.082 32.264 5.041a1 1 0 11-.616 1.902c-17.222-5.572-31.819-5.568-42.097-4.179-5.14.695-9.2 1.736-11.968 2.601a47.993 47.993 0 00-3.154 1.097c-.355.139-.622.25-.799.326-.088.037-.153.066-.196.085l-.046.021-.01.004-.001.001a1 1 0 01-.842-1.814L124 119c-.421-.907-.421-.907-.42-.908h.002l.005-.003.016-.007.06-.027.224-.098c.195-.084.482-.203.858-.35a50.51 50.51 0 013.286-1.144c2.862-.893 7.033-1.961 12.297-2.673a88.296 88.296 0 019.667-.762V88.014z"
            />
            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M165.377 124.963H128.37a1.57 1.57 0 00-1.57 1.57v.008c0 .867.703 1.57 1.57 1.57h37.007a1.57 1.57 0 001.57-1.57v-.008a1.57 1.57 0 00-1.57-1.57zM148.222 130.628h-20.547a.876.876 0 000 1.751h20.547a.876.876 0 100-1.751zM157.512 134.977h-20.547a.876.876 0 100 1.75h20.547a.875.875 0 100-1.75zM153.627 130.628h-1.548a.861.861 0 00-.861.861v.007a.86.86 0 00.861.861h1.548a.86.86 0 00.861-.861v-.007a.861.861 0 00-.861-.861zM158.344 130.628h-1.548a.861.861 0 00-.861.861v.007a.86.86 0 00.861.861h1.548a.86.86 0 00.861-.861v-.007a.861.861 0 00-.861-.861zM131.604 134.977h-1.548a.86.86 0 00-.861.861v.007c0 .475.385.861.861.861h1.548a.862.862 0 00.861-.861v-.007a.861.861 0 00-.861-.861zM163.061 130.628h-1.548a.862.862 0 00-.861.861v.007c0 .476.386.861.861.861h1.548a.86.86 0 00.861-.861v-.007a.861.861 0 00-.861-.861z"
            />
            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M178.414 221.608L118.943 221.608 118.943 230.637 178.414 230.637z"
            />
            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M188.182 243.636L118.182 243.636 118.182 261.818 188.182 261.818z"
            />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M118.49 242.9a2 2 0 00-2 2v15.777a2 2 0 002.004 2l69.671-.137a2.001 2.001 0 001.997-2.046l-.359-15.632a2 2 0 00-1.999-1.955l-69.314-.007zm-.112 4.518a2 2 0 012-2h5.218c1.65 0 2.59 1.886 1.597 3.204l-8.424 11.179a.218.218 0 01-.391-.13v-12.253zm17.386-1.198a2 2 0 011.602-.802h2.204c1.646 0 2.587 1.876 1.604 3.195l-7.806 10.47a1.996 1.996 0 01-1.603.805h-2.236c-1.647 0-2.588-1.88-1.601-3.199l7.836-10.469zm13.95.01c.377-.51.974-.812 1.609-.812h2.202c1.646 0 2.587 1.877 1.603 3.196l-7.811 10.47a1.998 1.998 0 01-1.603.804h-2.118c-1.641 0-2.583-1.867-1.609-3.188l7.727-10.47zm14.064-.008a2.001 2.001 0 011.603-.804h2.179c1.65 0 2.59 1.885 1.598 3.203l-7.884 10.47a2 2 0 01-1.598.797h-2.105c-1.646 0-2.587-1.877-1.603-3.196l7.81-10.47zm13.957.008a1.999 1.999 0 011.609-.812h2.195c1.645 0 2.587 1.877 1.603 3.196l-7.811 10.47a2 2 0 01-1.603.804h-2.116c-1.642 0-2.584-1.868-1.609-3.188l7.732-10.47zm9.86 11.654a2.007 2.007 0 01-2.004 2.004c-1.644 0-2.589-1.88-1.608-3.2 1.149-1.546 3.612-.731 3.612 1.196z"
            />
            <path
              fill={PRIMARY_DARKER}
              fillRule="nonzero"
              d="M73.637 276.275a7.836 7.836 0 01-3.878 5.94 94.837 94.837 0 01-6.902-2.265c-1.18-.434-2.33-.89-3.487-1.389a93.248 93.248 0 01-18.355-10.346 22.895 22.895 0 01-.868-3.393 5.992 5.992 0 012.633-5.99 22.194 22.194 0 002.786-1.592c1.939-1.592 1.96-4.616.984-6.902-.977-2.287-2.771-4.16-4.074-6.295-1.302-2.134-2.17-4.811-1.136-7.075.68-1.447 2.048-2.504 2.894-3.9 1.607-2.612 1.086-5.962.5-8.971-.782-4.088-1.57-8.161-2.373-12.256-.5-2.656-.876-5.788 1.085-7.669 2.662-2.525 7.054-.5 9.695 2.025a23.879 23.879 0 016.728 10.628c2.482 8.907-1.852 18.927 1.628 27.493 2.33 5.788 7.8 9.738 10.52 15.331 2.467 5.108 2.423 11.091 1.62 16.626z"
            />
            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M85.264 250.294c-1.107 2.265-1.896 5.065-.564 7.235a29.509 29.509 0 002.17 2.417c2.894 3.53 1.367 8.841-.897 12.784a7.76 7.76 0 00-1.324 3.335c-.087 1.889 1.28 3.459 2.416 4.963 1.136 1.505 1.961 3.394 1.194 4.964a115.719 115.719 0 01-25.387-6.013c-1.18-.434-2.33-.89-3.488-1.389-.238-2.633.594-5.383 1.657-7.864 1.18-2.721 2.988-5.549 3.444-8.537.412-2.721-.065-5.267.781-8.009a18.13 18.13 0 0110.961-11.757c1.527-.528 3.198-.897 4.341-2.004a8.689 8.689 0 001.787-2.894c2.045-4.443 4.076-8.899 6.092-13.371.94-2.047 2.17-4.34 4.42-4.702 1.723-.282 3.445.853 4.291 2.373a8.491 8.491 0 01.767 5.1c-.97 8.914-8.675 15.353-12.661 23.369z"
            />

          </g>
        </g>
      </svg>
    </Box>
  );
}
