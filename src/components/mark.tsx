export function NMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 300 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M64 256H0V0h64l192 128V0h64v256h-64L64 128v128Z"
      />
    </svg>
  );
}
