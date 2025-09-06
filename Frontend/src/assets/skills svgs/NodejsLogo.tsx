function NodejsLogo({ width = "", height = "", className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 128 128"
      role="img"
      aria-label="Node.js logo"
    >
      <path
        fill="url(#nodejs-a)"
        d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"
      />
      <path
        fill="url(#nodejs-b)"
        d="M116.897 29.76 66.841.825A8.161 8.161 0 0 0 65.302.23L9.21 96.798a6.251 6.251 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 0 0-1.302-1.072z"
      />
      <path
        fill="url(#nodejs-c)"
        d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"
      />
      <defs>
        <linearGradient id="nodejs-a">
          <stop stopColor="#3F873F" />
          <stop offset=".33" stopColor="#3F8B3D" />
          <stop offset=".637" stopColor="#3E9638" />
          <stop offset=".934" stopColor="#3DA92E" />
          <stop offset="1" stopColor="#3DAE2B" />
        </linearGradient>
        <linearGradient id="nodejs-b">
          <stop offset=".138" stopColor="#3F873F" />
          <stop offset=".402" stopColor="#52A044" />
          <stop offset=".713" stopColor="#64B749" />
          <stop offset=".908" stopColor="#6ABF4B" />
        </linearGradient>
        <linearGradient id="nodejs-c">
          <stop offset=".092" stopColor="#6ABF4B" />
          <stop offset=".287" stopColor="#64B749" />
          <stop offset=".598" stopColor="#52A044" />
          <stop offset=".862" stopColor="#3F873F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default NodejsLogo;
