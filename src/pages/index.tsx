import { FormEvent, useEffect, useRef } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Lottie from 'react-lottie';
import { ReactSVG } from 'react-svg';

import * as animationData from '../assets/64793-rocket-rider-mit-meetanshi.json';
// import * as animationGoogleAds from '../assets/31622-google-ads.json';
import { ImWhatsapp } from 'react-icons/im';
import { AiFillPhone } from 'react-icons/ai';

import gsap, { Back } from 'gsap';

import { CardGlass } from '../components/CardGlass';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import GoogleAdsImg from '../assets/illustrations/illustration-google-ads.svg';
import styles from '../styles/home.module.scss';

var tl = gsap.timeline({ defaults: { 
  duration: .7,
  ease: Back.easeOut.config(2),
  opacity: 0,
}});

var tl2 = gsap.timeline({ defaults: { 
  duration: 1.5,
}});

var tl3 = gsap.timeline({ defaults: { 
  duration: 1.5,
  delay: 1,
}});

// var timelineGoogle = gsap.timeline({ defaults : {
//     duration: 1,
//     ease: Back.easeOut.config(2),
//     opacity: 0,
// }})

export default function Home() {

  const videoRef = useRef<HTMLVideoElement>(null);
  const formRefContact = useRef<HTMLFormElement>(null);

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  useEffect(() => {
    tl
    .from('.circle-medium', {scale: .2, transformOrigin: 'center'}, "-=.5")
    .from('.circle-small', {scale: .2, transformOrigin: 'center'}, "-=.5")

    tl2.from('.lottie-animation', { opacity: 0, stagger: .3 });
    tl3
    .to('.circle-medium', { y: 35, repeat: -1, yoyo: true }, 2)
    .to('.circle-small', { y: 20, repeat: -1, yoyo: true }, 1);
  }, []);

  // useEffect(() => {
    // setup-google-rectangle-left" 
    // setup-google-link-left" width
    // setup-google-left-description
    // setup-google-left-description
    // setup-google-left-tag-orange"
    // setup-google-left-tag-purple"
    // if(window.pageYOffset >= 2712) {
    //   timelineGoogle
    //   .from('.setup-google-rectangle-left', { opacity: 0, scaleX: 0, transformOrigin: 'left'}, "-=.2")
    //   .from('.setup-google-rectangle-left-back', { opacity: 0, scaleY: 0, transformOrigin: 'bottom'}, "-=.2")
    //   .from('.setup-google-link-left', { opacity: 0, scaleX: 0, transformOrigin: 'left' }, "-=.3")
    //   .from('.setup-google-left-tag-orange', { opacity: 0, scaleX: 0, transformOrigin: 'left' }, "-=.5")
    //   .from('.setup-google-left-tag-purple', { opacity: 0, scaleX: 0, transformOrigin: 'left' }, "-=.5")
    //   .from('.setup-google-left-description-1', { opacity: 0, scaleX: 0, transformOrigin: 'left' }, "-=.7")
    // }
  // }, []);
  function handleScrollDown() {
    if(window.pageYOffset >=1140) videoRef?.current.play();
  }

  function handleSubmitForm(e: FormEvent) {
    e.preventDefault();

    const formdata = new FormData(formRefContact.current);
    console.log({
      first_name: formdata.get('first_name'),
      email: formdata.get('email'),
      whatsapp_phone: formdata.get('whatsapp_phone'),
    })
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScrollDown);
    return () => document.removeEventListener('scroll', handleScrollDown);
  }, []);

  return (
    <div>
      <Head>
        <title>Seja bem vindo | Amoratec - Agência</title>
        <meta name="description" content="Aumente suas vendas, consiga fidelizar e ganhar mais clientes 
        e fazer do seu negócio uma referência de mercado na construção." />
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.firstScreen}>
            <div>
              <h1>Queremos levar sua construtora ao topo!</h1>
              <h2>Acelere a decolagem da sua construtora no marketing digital.</h2>
              <p>Aumente suas vendas, consiga fidelizar e ganhar mais clientes e fazer do 
                seu negócio uma referência de mercado na construção.</p>
              <button>AGENDE SUA CONSULTORIA GRATUITA</button>
            </div>
            <div className={styles.images}>
              <svg width="666" height="555" viewBox="0 0 666 555" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle-medium" cx="525" cy="141" r="141" fill="#161616"/>
                <circle className="circle-small" cx="77" cy="89" r="77" fill="#161616"/>
              </svg>
              <div className="lottie-animation">
                <Lottie 
                  options={defaultOptions}
                  height={300}
                  />
              </div>
            </div>
          </div>
        </div>
        <section className={styles.containerFeatures}>
          <div className={styles.header}>
            <h2>Não é sobre tecnologia, é sobre o seu negócio.</h2>
            <p>DESCUBRA COMO PODEMOS AJUDAR!</p>
          </div>
          <div className={styles.container}>
            <div className={styles.listFeatures}>
                <CardGlass 
                  icon="/images/002-target.svg"
                  title="Mais Assertividade"
                  description="Todos os processos, rotinas e diferencias da empresa estão incluídos no sistema o que,
                  por sua vez causa familiaridade e conforto a toda equipe, aumentando o aproveitamento e rendimento de maneira 
                  assertiva."
                />
                <CardGlass 
                  icon="/images/icon-roi.svg"
                  title="Retorno financeiro"
                  description="Todos os processos, rotinas e diferencias da empresa estão incluídos no sistema o que,
                  por sua vez causa familiaridade e conforto a toda equipe, aumentando o aproveitamento e rendimento de maneira 
                  assertiva."
                />
                <CardGlass 
                  icon="/images/icon-target.svg"
                  title="Possibilidade de atualizações futuras"
                  description="A adaptação de um software personalizado é essencial para o crescimento de uma empresa. Esse tipo
                   de software possui a possibilidade de ser melhorado e adaptado à medida que os processos, rotinas e demandas vão evoluindo."
                />
                <CardGlass 
                  icon="/images/icon-security.svg"
                  title="Mais segurança"
                  description="Diferente de softwares prontos, os personalizados possuem uma segurança diferenciada. Mesmo que seja hospedado
                   virtualmente, o software personalizado terá um banco de dados único e não será compartilhado."
                />
            </div>
          </div>
        </section>
        <section className={styles.containerCallToAction}>
          <div className={styles.overlay}></div>
          <video ref={videoRef} autoPlay={false} muted loop>
            <source src="/videos/lightspeed-jump.mp4" />
          </video>
          <div className={styles.content}>
            <strong>Não fique de fora da inovação desta nova era de revolução tecnológica.</strong>
            <p>Estamos vivenciando uma era totalmente nova aonde cada vez mais as empresas tem buscado soluções digitais
                para otimizar os seus resultados. Não deixe sua empresa ficar na contramão da inovação! </p>
          </div> 
        </section>
        <section className={styles.containerServices}>
          <div className={styles.header}>
              <strong>RESOLVEMOS PROBLEMAS REAIS</strong>
              <h2>O quê podemos fazer por você?</h2>
          </div>
          <div className={styles.listServices}>
                <article>
                  <div>
                    <svg width="589" height="588" viewBox="0 0 589 588" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect className="setup-google-rectangle-left-back" width="329.92" height="110.656" rx="20" transform="matrix(0.866025 -0.5 2.20305e-08 1 0 468.241)" fill="url(#paint0_linear)" fill-opacity="0.3"/>
                      <rect className="setup-google-rectangle-left" width="329.92" height="110.656" rx="20" transform="matrix(0.866025 -0.5 2.20305e-08 1 8.70923 476.95)" fill="#303030"/>
                      <rect className="setup-google-link-left" width="268.444" height="11.2706" rx="5.63528" transform="matrix(0.866025 -0.5 2.20305e-08 1 27.343 484.635)" fill="#2D7EFA"/>
                      <rect className="setup-google-left-description-1" width="268.444" height="11.2706" rx="5.63528" transform="matrix(0.866025 -0.5 2.20305e-08 1 27.343 526.643)" fill="#404040"/>
                      <rect className="setup-google-left-description-2" width="268.444" height="11.2706" rx="5.63528" transform="matrix(0.866025 -0.5 2.20305e-08 1 27.343 545.086)" fill="#404040"/>
                      <rect className="setup-google-left-tag-orange" width="54.3036" height="11.2706" rx="5.63528" transform="matrix(0.866025 -0.5 2.20305e-08 1 27.343 505.126)" fill="#F1BF00"/>
                      <rect className="setup-google-left-tag-purple" width="123.464" height="11.2706" rx="5.63528" transform="matrix(0.866025 -0.5 2.20305e-08 1 80.5825 474.388)" fill="#DD81FF"/>
                      <rect width="329.92" height="110.656" rx="20" transform="matrix(0.866025 -0.5 2.20305e-08 1 294.572 449.286)" fill="url(#paint1_linear)" fill-opacity="0.3"/>
                      <rect width="329.92" height="110.656" rx="20" transform="matrix(0.866025 -0.5 2.20305e-08 1 303.281 457.995)" fill="#303030"/>
                      <rect width="268.444" height="11.2706" rx="5.63528" transform="matrix(0.866025 -0.5 2.20305e-08 1 321.915 465.679)" fill="#2D7EFA"/>
                      <rect width="66.0865" height="11.2706" rx="5.63528" transform="matrix(0.866025 -0.5 2.20305e-08 1 321.915 502.565)" fill="#2D7EFA"/>
                      <rect width="66.0865" height="11.2706" rx="5.63528" transform="matrix(0.866025 -0.5 2.20305e-08 1 403.105 455.689)" fill="#2D7EFA"/>
                      <rect width="66.0865" height="11.2706" rx="5.63528" transform="matrix(0.866025 -0.5 2.20305e-08 1 484.295 408.814)" fill="#2D7EFA"/>
                      <rect width="85.5538" height="11.2706" rx="5.63528" transform="matrix(0.866025 -0.5 2.20305e-08 1 321.915 521.008)" fill="#404040"/>
                      <rect width="85.5538" height="11.2706" rx="5.63528" transform="matrix(0.866025 -0.5 2.20305e-08 1 403.105 474.132)" fill="#404040"/>
                      <rect width="85.5538" height="11.2706" rx="5.63528" transform="matrix(0.866025 -0.5 2.20305e-08 1 484.295 427.257)" fill="#404040"/>
                      <rect width="54.3036" height="11.2706" rx="5.63528" transform="matrix(0.866025 -0.5 2.20305e-08 1 321.915 481.048)" fill="#F1BF00"/>
                      <rect width="123.464" height="11.2706" rx="5.63528" transform="matrix(0.866025 -0.5 2.20305e-08 1 375.154 450.311)" fill="#DD81FF"/>
                      <path opacity="0.1" d="M442.068 74.3303C440.42 72.877 438.312 72.1636 435.909 72.2462C433.507 72.3288 430.875 73.205 428.221 74.8062L188.522 212.876L177.859 169.92C176.881 166.215 174.706 163.696 171.675 162.754C168.644 161.813 164.927 162.502 161.104 164.715L99.8982 200.053L99.8982 216.05L161.104 180.713C161.853 180.281 162.582 180.141 163.181 180.314C163.78 180.487 164.217 180.964 164.427 181.674L215.801 390.219C216.78 393.923 218.954 396.443 221.985 397.384C225.017 398.325 228.734 397.636 232.557 395.423L398.726 299.485C402.718 297.224 406.597 293.407 409.685 288.7C412.772 283.993 414.873 278.696 415.619 273.734L446.084 88.9693C446.587 85.6855 446.487 82.6566 445.791 80.1177C445.094 77.5789 443.82 75.5984 442.068 74.3303V74.3303ZM279.915 416.074C279.915 422.402 278.29 429.525 275.247 436.544C272.204 443.563 267.879 450.161 262.818 455.504C257.758 460.848 252.189 464.696 246.817 466.563C241.445 468.43 236.51 468.232 232.637 465.994C228.763 463.755 226.126 459.577 225.057 453.988C223.989 448.398 224.537 441.648 226.633 434.592C228.729 427.535 232.279 420.489 236.833 414.343C241.388 408.198 246.742 403.23 252.22 400.068C259.565 395.827 266.609 395.131 271.803 398.133C276.997 401.134 279.915 407.588 279.915 416.074ZM404.541 344.12C404.541 350.448 402.917 357.572 399.874 364.591C396.831 371.609 392.506 378.207 387.445 383.551C382.384 388.894 376.816 392.743 371.444 394.61C366.071 396.477 361.137 396.279 357.263 394.04C353.39 391.802 350.753 387.624 349.684 382.034C348.615 376.445 349.164 369.695 351.26 362.638C353.356 355.582 356.906 348.535 361.46 342.39C366.015 336.245 371.369 331.277 376.847 328.115C384.192 323.874 391.236 323.178 396.43 326.179C401.624 329.181 404.541 335.635 404.541 344.12Z" fill="url(#paint2_linear)"/>
                      <path opacity="0.4" d="M456.412 79.9658C454.765 78.5125 452.656 77.7991 450.254 77.8817C447.851 77.9643 445.219 78.8405 442.565 80.4417L202.866 218.512L192.204 175.555C191.225 171.851 189.05 169.331 186.019 168.39C182.988 167.448 179.271 168.138 175.448 170.351L114.243 205.688L114.243 221.686L175.448 186.349C176.197 185.916 176.926 185.776 177.525 185.949C178.125 186.123 178.562 186.6 178.772 187.309L230.146 395.854C231.124 399.559 233.299 402.078 236.33 403.02C239.361 403.961 243.078 403.271 246.901 401.058L413.07 305.121C417.062 302.859 420.941 299.042 424.029 294.335C427.117 289.628 429.217 284.331 429.964 279.369L460.428 94.6048C460.932 91.321 460.832 88.2921 460.135 85.7532C459.439 83.2144 458.165 81.2339 456.412 79.9658V79.9658ZM294.259 421.709C294.259 428.037 292.635 435.161 289.592 442.18C286.549 449.198 282.223 455.796 277.163 461.14C272.102 466.483 266.534 470.332 261.161 472.199C255.789 474.066 250.854 473.868 246.981 471.629C243.108 469.391 240.47 465.213 239.402 459.623C238.333 454.034 238.881 447.284 240.978 440.227C243.074 433.171 246.624 426.124 251.178 419.979C255.732 413.834 261.087 408.866 266.564 405.703C273.909 401.463 280.954 400.767 286.148 403.768C291.341 406.77 294.259 413.223 294.259 421.709ZM418.886 349.756C418.886 356.084 417.262 363.208 414.219 370.226C411.175 377.245 406.85 383.843 401.789 389.186C396.729 394.53 391.16 398.378 385.788 400.245C380.416 402.113 375.481 401.914 371.608 399.676C367.735 397.437 365.097 393.259 364.028 387.67C362.96 382.08 363.508 375.33 365.604 368.274C367.701 361.217 371.25 354.171 375.805 348.026C380.359 341.88 385.714 336.913 391.191 333.75C398.536 329.509 405.581 328.813 410.774 331.815C415.968 334.817 418.886 341.27 418.886 349.756Z" fill="url(#paint3_linear)"/>
                      <g opacity="0.2">
                      <path d="M115.066 330.182L143.035 314.034L143.035 327.955L115.066 344.103L115.066 380.694L102.252 388.092L102.252 351.501L74.2832 367.649L74.2832 353.728L102.252 337.58L102.252 303.773L115.066 296.375L115.066 330.182Z" fill="url(#paint4_linear)"/>
                      <path d="M20.6157 294.209L34.7542 286.047L34.7542 293.084L20.6157 301.246L20.6157 319.743L14.1385 323.483L14.1385 304.986L5.31522e-07 313.149L3.76495e-07 306.112L14.1385 297.949L14.1385 280.859L20.6157 277.12L20.6157 294.209Z" fill="url(#paint5_linear)"/>
                      <path d="M71.2607 181.851L80.4308 176.557L80.4308 181.121L71.2607 186.415L71.2607 198.412L67.0597 200.837L67.0597 188.84L57.8896 194.135L57.8896 189.571L67.0597 184.276L67.0597 173.192L71.2607 170.767L71.2607 181.851Z" fill="url(#paint6_linear)"/>
                      </g>
                      <path opacity="0.2" d="M511.878 185.964L486.408 235.321C482.926 242.101 483.476 248.881 487.69 250.508C491.905 252.135 498.135 247.887 501.617 241.107L501.891 240.474V295.255C501.891 301.492 506.289 304.023 511.786 300.95C517.283 297.786 521.681 290.283 521.681 284.046V229.265L521.956 229.536C525.438 232.338 531.759 229.446 535.882 223.027C540.097 216.609 540.646 209.196 537.165 206.394L511.878 185.964Z" fill="url(#paint7_linear)"/>
                      <defs>
                          <linearGradient id="paint0_linear" x1="164.96" y1="0" x2="164.96" y2="110.656" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white"/>
                          <stop offset="1" stop-color="white" stop-opacity="0"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear" x1="164.96" y1="0" x2="164.96" y2="110.656" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white"/>
                          <stop offset="1" stop-color="white" stop-opacity="0"/>
                          </linearGradient>
                          <linearGradient id="paint2_linear" x1="273.149" y1="100.026" x2="425.547" y2="363.988" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white"/>
                          <stop offset="1" stop-color="white" stop-opacity="0"/>
                          </linearGradient>
                          <linearGradient id="paint3_linear" x1="287.493" y1="105.662" x2="439.892" y2="369.624" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white"/>
                          <stop offset="1" stop-color="white" stop-opacity="0"/>
                          </linearGradient>
                          <linearGradient id="paint4_linear" x1="108.659" y1="300.074" x2="145.17" y2="363.313" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white"/>
                          <stop offset="1" stop-color="white" stop-opacity="0"/>
                          </linearGradient>
                          <linearGradient id="paint5_linear" x1="17.3771" y1="278.99" x2="35.8337" y2="310.957" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white"/>
                          <stop offset="1" stop-color="white" stop-opacity="0"/>
                          </linearGradient>
                          <linearGradient id="paint6_linear" x1="69.1602" y1="171.98" x2="81.131" y2="192.713" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white"/>
                          <stop offset="1" stop-color="white" stop-opacity="0"/>
                          </linearGradient>
                          <linearGradient id="paint7_linear" x1="493.773" y1="235.755" x2="539.945" y2="261.841" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white"/>
                          <stop offset="1" stop-color="white" stop-opacity="0"/>
                          </linearGradient>
                      </defs>
                  </svg>
                  </div>
                  <div className={styles.description}>
                    <strong>Seja encontrado pelos seus clientes</strong>
                    <h3>Setup Google</h3>
                    <p>Faremos auditoria, configuração de serviços de indexação e monitoramento do Google (Tag Manager, Analytics, Search Console)</p>
                  </div>
                </article>
                <article>
                  <div className={styles.description}>
                    <strong>Tenha um site que converta</strong>
                    <h3>Criação De Sites</h3>
                    <p>Entregaremos um site estratégico e atual, totalmente adaptado para acesso via celular (responsivos), otimizados e gerenciáveis para sua construtora gerar resultados por meio de conteúdo e táticas de conversões.</p>
                  </div>
                  <div>
                  <svg width="598" height="731" viewBox="0 0 598 731" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                    <rect width="565.176" height="306.917" rx="20" transform="matrix(0.866025 0.5 -2.20305e-08 1 108.544 0)" fill="url(#paint0_linear)"/>
                    </g>
                    <rect width="565.176" height="306.917" rx="20" transform="matrix(0.866025 0.5 -2.20305e-08 1 89.8293 15.4395)" fill="#333333"/>
                    <rect width="522.132" height="41.1717" rx="20" transform="matrix(0.866025 0.5 -2.20305e-08 1 108.468 58.0146)" fill="#2D7EFA"/>
                    <rect width="134.744" height="22.4573" rx="11.2287" transform="matrix(0.866025 0.5 -2.20305e-08 1 108.468 121.644)" fill="#404040"/>
                    <rect width="166.558" height="177.319" rx="20" transform="matrix(0.866025 0.5 -2.20305e-08 1 409.111 295.22)" fill="#404040"/>
                    <rect width="134.744" height="22.4573" rx="11.2287" transform="matrix(0.866025 0.5 -2.20305e-08 1 105.631 272.529)" fill="#2D7EFA"/>
                    <rect width="234.866" height="14.5037" rx="7.25184" transform="matrix(0.866025 0.5 -2.20305e-08 1 108.468 222.702)" fill="#404040"/>
                    <rect width="122.579" height="14.5037" rx="7.25184" transform="matrix(0.866025 0.5 -2.20305e-08 1 108.468 248.434)" fill="#404040"/>
                    <rect width="262.938" height="22.4573" rx="11.2287" transform="matrix(0.866025 0.5 -2.20305e-08 1 108.468 155.33)" fill="#DD81FF"/>
                    <circle r="7.48577" transform="matrix(0.866025 0.5 -2.20305e-08 1 554.165 300.366)" fill="#DD81FF"/>
                    <rect width="14.9715" height="7.48577" rx="3.74288" transform="matrix(0.866025 0.5 -2.20305e-08 1 529.043 282.12)" fill="#2D7EFA"/>
                    <rect width="216.152" height="22.4573" rx="11.2287" transform="matrix(0.866025 0.5 -2.20305e-08 1 108.468 189.016)" fill="#DD81FF"/>
                    <path d="M543.63 523.536L418.43 451.252L418.43 393.105L445.982 419.939L484.879 404.933L543.63 495.439L543.63 523.536Z" fill="#333333"/>
                    <circle r="11.2287" transform="matrix(0.866025 0.5 -2.20305e-08 1 443.551 371.247)" fill="#333333"/>
                    <g opacity="0.2">
                      <rect opacity="0.4" width="227.415" height="271.243" rx="20" transform="matrix(0.866025 0.5 -2.20305e-08 1 13.2314 169.365)" fill="url(#paint1_linear)"/>
                    </g>
                    <rect width="227.415" height="271.243" rx="20" transform="matrix(0.866025 0.5 -2.20305e-08 1 0 179.289)" fill="#333333"/>
                    <rect width="173.268" height="9.92354" rx="4.96177" transform="matrix(0.866025 0.5 -2.20305e-08 1 23.446 293.715)" fill="#404040"/>
                    <rect width="173.268" height="19.8471" rx="9.92354" transform="matrix(0.866025 0.5 -2.20305e-08 1 23.446 406.182)" fill="#2D7EFA"/>
                    <rect width="169.057" height="6.61569" rx="3.30785" transform="matrix(0.866025 0.5 -2.20305e-08 1 25.0093 374.006)" fill="#404040"/>
                    <rect width="157.626" height="6.61569" rx="3.30785" transform="matrix(0.866025 0.5 -2.20305e-08 1 30.2195 390.245)" fill="#404040"/>
                    <rect width="173.268" height="13.2314" rx="6.61569" transform="matrix(0.866025 0.5 -2.20305e-08 1 23.446 323.486)" fill="#DD81FF"/>
                    <rect width="116.715" height="13.2314" rx="6.61569" transform="matrix(0.866025 0.5 -2.20305e-08 1 47.9341 360.779)" fill="#DD81FF"/>
                    <rect width="181.691" height="36.3863" rx="18.1932" transform="matrix(0.866025 0.5 -2.20305e-08 1 19.7988 237.857)" fill="#2D7EFA"/>
                    <circle r="6.61569" transform="matrix(0.866025 0.5 -2.20305e-08 1 181.191 297.131)" fill="#DD81FF"/>
                    <rect width="13.2314" height="6.61569" rx="3.30785" transform="matrix(0.866025 0.5 -2.20305e-08 1 158.99 281.005)" fill="#2D7EFA"/>
                    <g opacity="0.2">
                      <rect opacity="0.4" width="150.784" height="261.678" rx="20" transform="matrix(0.866025 0.5 -2.20305e-08 1 396.396 386.921)" fill="url(#paint2_linear)"/>
                    </g>
                    <rect width="150.784" height="261.678" rx="20" transform="matrix(0.866025 0.5 -2.20305e-08 1 380.838 393.303)" fill="#333333"/>
                    <rect width="114.883" height="9.57358" rx="4.78679" transform="matrix(0.866025 0.5 -2.20305e-08 1 396.384 483.654)" fill="#404040"/>
                    <rect width="114.883" height="19.1472" rx="9.57358" transform="matrix(0.866025 0.5 -2.20305e-08 1 396.384 592.154)" fill="#2D7EFA"/>
                    <rect width="112.091" height="6.38239" rx="3.19119" transform="matrix(0.866025 0.5 -2.20305e-08 1 397.42 560.841)" fill="#404040"/>
                    <rect width="104.512" height="6.38239" rx="3.19119" transform="matrix(0.866025 0.5 -2.20305e-08 1 400.875 575.6)" fill="#404040"/>
                    <rect width="114.883" height="12.7648" rx="6.38239" transform="matrix(0.866025 0.5 -2.20305e-08 1 396.384 512.375)" fill="#DD81FF"/>
                    <rect width="77.3865" height="12.7648" rx="6.38239" transform="matrix(0.866025 0.5 -2.20305e-08 1 412.621 544.087)" fill="#DD81FF"/>
                    <rect width="120.468" height="35.1031" rx="17.5516" transform="matrix(0.866025 0.5 -2.20305e-08 1 393.966 418.434)" fill="#2D7EFA"/>
                    <g opacity="0.2">
                      <path d="M247.177 521.097L227.848 485.639L247.177 472.501L267.649 484.32L248.225 497.404L267.649 532.917L247.177 521.097Z" fill="url(#paint3_linear)"/>
                      <path d="M317.046 471.169L291.528 581.446L275.817 572.376L301.335 462.099L317.046 471.169Z" fill="url(#paint4_linear)"/>
                      <path d="M324.008 516.859L344.48 528.678L363.809 564.136L344.48 577.275L324.008 565.456L343.433 552.372L324.008 516.859Z" fill="url(#paint5_linear)"/>
                    </g>
                    <g opacity="0.2">
                      <path d="M47.7217 39.8565C48.9254 40.4948 49.8098 40.7075 50.3748 40.4948C50.9398 40.2537 51.2223 39.6225 51.2223 38.6013C51.2223 37.8355 51.0994 36.247 50.8538 33.8359C50.8292 33.5948 50.7555 32.8289 50.6327 31.5382C50.5099 30.2192 50.4485 29.0633 50.4485 28.0705C50.4485 25.6594 51.0872 24.156 52.3646 23.5603C53.642 22.9363 55.3493 23.2412 57.4865 24.4751L60.1396 26.0069L60.1396 31.9637L58.7025 31.134C57.9164 30.6802 57.3514 30.5525 57.0075 30.7511C56.6636 30.9496 56.4916 31.4602 56.4916 32.2828C56.4916 32.9069 56.5899 34.3819 56.7864 36.7079C57.0075 39.5871 57.118 41.4521 57.118 42.3031C57.118 43.8632 56.7864 44.9624 56.1231 45.6006C55.4844 46.253 54.5018 46.3381 53.1752 45.8559L53.1752 45.941C54.5018 47.0189 55.4844 48.2528 56.1231 49.6428C56.7864 51.0185 57.118 52.5006 57.118 54.0891C57.118 54.9401 57.0075 56.6775 56.7864 59.3014C56.5899 61.3437 56.4916 62.6911 56.4916 63.3435C56.4916 64.1661 56.6636 64.8753 57.0075 65.471C57.3514 66.095 57.9164 66.6339 58.7025 67.0878L60.1396 67.9175L60.1396 73.8743L57.4865 72.3426C55.3493 71.1087 53.642 69.4422 52.3646 67.3431C51.0872 65.2724 50.4485 63.0173 50.4485 60.5778C50.4485 59.585 50.5099 58.5142 50.6327 57.3654C50.7555 56.1882 50.8292 55.4932 50.8538 55.2805C51.0994 53.1531 51.2223 51.7064 51.2223 50.9405C51.2223 49.9761 50.9398 49.0471 50.3748 48.1536C49.8098 47.2317 48.9254 46.3949 47.7217 45.6432L47.7217 39.8565Z" fill="url(#paint6_linear)"/>
                      <path d="M77.7908 63.0036C76.5871 62.3654 75.7028 62.181 75.1377 62.4505C74.5727 62.6916 74.2902 63.2944 74.2902 64.2588C74.2902 65.0247 74.4131 66.6132 74.6587 69.0243C74.6833 69.2654 74.757 70.0454 74.8798 71.3645C75.0026 72.6551 75.064 73.7968 75.064 74.7896C75.064 77.2291 74.4253 78.7467 73.1479 79.3424C71.8705 79.9664 70.1632 79.6615 68.026 78.4276L65.3729 76.8958L65.3729 70.939L66.81 71.7687C67.5961 72.2225 68.1611 72.336 68.505 72.1091C68.8489 71.9105 69.0209 71.3999 69.0209 70.5773C69.0209 69.9249 68.9226 68.464 68.7261 66.1948C68.505 63.3156 68.3945 61.4506 68.3945 60.5996C68.3945 59.0111 68.7138 57.9048 69.3525 57.2808C70.0158 56.6426 71.0107 56.5504 72.3373 57.0042L72.3373 56.9191C71.0107 55.8696 70.0158 54.6428 69.3525 53.2387C68.7138 51.8487 68.3945 50.3737 68.3945 48.8136C68.3945 47.9626 68.505 46.2252 68.7261 43.6013C68.9226 41.5023 69.0209 40.1407 69.0209 39.5166C69.0209 38.694 68.849 37.9849 68.505 37.3892C68.1611 36.7935 67.5961 36.2687 66.81 35.8149L65.3729 34.9852L65.3729 29.0284L68.026 30.5601C70.1632 31.794 71.8705 33.4605 73.1479 35.5596C74.4253 37.6303 75.064 39.8712 75.064 42.2823C75.064 43.2751 75.0026 44.3601 74.8798 45.5373C74.757 46.6861 74.6833 47.3669 74.6587 47.5796C74.4131 49.7071 74.2902 51.1538 74.2902 51.9196C74.2902 52.9408 74.5727 53.8982 75.1377 54.7917C75.7028 55.6568 76.5871 56.4653 77.7908 57.217L77.7908 63.0036Z" fill="url(#paint7_linear)"/>
                    </g>
                      <defs>
                      <linearGradient id="paint0_linear" x1="282.588" y1="0" x2="282.588" y2="306.917" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"/>
                      <stop offset="1" stop-color="white" stop-opacity="0"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear" x1="113.707" y1="0" x2="113.707" y2="271.243" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"/>
                      <stop offset="1" stop-color="white" stop-opacity="0"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear" x1="75.392" y1="0" x2="75.392" y2="261.678" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"/>
                      <stop offset="1" stop-color="white" stop-opacity="0"/>
                      </linearGradient>
                      <linearGradient id="paint3_linear" x1="295.829" y1="458.919" x2="241.698" y2="552.677" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"/>
                      <stop offset="1" stop-color="white" stop-opacity="0"/>
                      </linearGradient>
                      <linearGradient id="paint4_linear" x1="295.829" y1="458.919" x2="241.698" y2="552.677" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"/>
                      <stop offset="1" stop-color="white" stop-opacity="0"/>
                      </linearGradient>
                      <linearGradient id="paint5_linear" x1="295.829" y1="458.919" x2="241.698" y2="552.677" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"/>
                      <stop offset="1" stop-color="white" stop-opacity="0"/>
                      </linearGradient>
                      <linearGradient id="paint6_linear" x1="62.7927" y1="19.5341" x2="35.1172" y2="67.4694" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"/>
                      <stop offset="1" stop-color="white" stop-opacity="0"/>
                      </linearGradient>
                      <linearGradient id="paint7_linear" x1="62.7927" y1="19.5341" x2="35.1172" y2="67.4694" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"/>
                      <stop offset="1" stop-color="white" stop-opacity="0"/>
                      </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </article>
                <article>
                  <div>
                    <svg width="589" height="754" viewBox="0 0 589 754" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.07" d="M57.3718 359.773C35.6591 341.15 22.2974 306.493 22.2974 259.727C22.2974 163.69 78.5835 53.2888 147.897 14.0389C217.295 -25.2946 272.579 20.8032 271.91 117.592C271.576 163.606 258.382 212.961 237.087 255.885C220.635 288.956 209.862 325.867 206.271 360.19C204.851 374.888 196.083 390.087 185.978 395.933L108.48 440.611C98.292 446.54 89.6069 441.195 88.0202 428.251C84.5127 398.104 73.8234 374.053 57.3718 359.773Z" fill="url(#paint0_linear)"/>
                      <path opacity="0.07" d="M89.5234 518.443V497.899C89.5234 486.876 95.8702 474.433 103.804 469.673L190.822 419.399C198.755 414.806 205.102 419.984 205.102 431.007V451.551C205.102 468.086 196.417 486.458 185.06 495.477L109.399 539.153C98.125 543.412 89.5234 534.811 89.5234 518.443Z" fill="url(#paint1_linear)"/>
                      <path opacity="0.4" d="M99.1272 393.01C77.4144 374.387 64.0527 339.73 64.0527 292.964C64.0527 196.927 120.339 86.5259 189.653 47.2759C259.05 7.94246 314.334 54.0403 313.666 150.829C313.332 196.843 300.137 246.198 278.842 289.123C262.39 322.193 251.617 359.104 248.027 393.427C246.607 408.125 237.838 423.324 227.733 429.17L150.236 473.848C140.047 479.777 131.362 474.432 129.776 461.488C126.268 431.341 115.579 407.206 99.1272 393.01Z" fill="url(#paint2_linear)"/>
                      <path opacity="0.4" d="M131.279 551.68V531.136C131.279 520.113 137.626 507.67 145.559 502.91L232.577 452.636C240.511 448.043 246.857 453.221 246.857 464.244V484.788C246.857 501.323 238.172 519.695 226.815 528.714L151.154 572.39C139.88 576.649 131.279 568.048 131.279 551.68Z" fill="url(#paint3_linear)"/>
                      <path d="M314.083 558.862L562.61 415.39L562.527 544.915L335.879 675.693L313.916 708.178L314.083 558.862Z" fill="#333333"/>
                      <path d="M589 465.915V430.757L495.218 484.871V520.029L589 465.915Z" fill="#2D7EFA"/>
                      <path opacity="0.15" d="M377.969 553.517L432.418 522.117V533.475L377.969 564.875V553.517Z" fill="white"/>
                      <path opacity="0.15" d="M377.885 576.315L482.858 515.77V527.128L377.885 587.673V576.315Z" fill="white"/>
                      <path opacity="0.15" d="M377.885 599.03L505.072 525.625V536.982L377.885 610.388V599.03Z" fill="white"/>
                      <path d="M364.524 573.142C364.524 583.831 358.177 596.107 350.41 600.617C342.644 605.126 336.297 600.116 336.297 589.427C336.297 578.737 342.644 566.461 350.41 561.952C358.177 557.442 364.524 562.453 364.524 573.142Z" fill="#2D7EFA"/>
                      <path d="M294.709 480.946L46.1814 624.417L46.0979 753.942L272.662 623.165L294.542 630.347L294.709 480.946Z" fill="#333333"/>
                      <path d="M118.502 647.216V612.058L24.7192 666.256V701.414L118.502 647.216Z" fill="#DD81FF"/>
                      <path opacity="0.15" d="M230.823 549.425L176.375 580.825V592.182L230.823 560.782V549.425Z" fill="white"/>
                      <path opacity="0.15" d="M230.823 572.14L132.531 628.844V640.201L230.823 583.497V572.14Z" fill="white"/>
                      <path opacity="0.15" d="M230.74 594.938L103.637 668.344V679.701L230.823 606.295L230.74 594.938Z" fill="white"/>
                      <path d="M244.185 553.517C244.185 564.206 250.532 569.217 258.298 564.707C266.065 560.198 272.411 547.922 272.411 537.232C272.411 526.543 266.065 521.532 258.298 526.042C250.532 530.551 244.185 542.828 244.185 553.517Z" fill="#DD81FF"/>
                      <path opacity="0.15" d="M17.4536 470.09L11.1903 483.953L63.969 496.229L9.10254 572.641L15.3658 579.238L82.7589 485.372L17.4536 470.09Z" fill="white"/>
                      <path d="M0 485.623C0 496.396 6.3468 501.49 14.1133 497.064C21.8798 492.554 28.2266 480.195 28.2266 469.338C28.2266 458.565 21.8798 453.471 14.1133 457.897C6.26329 462.407 0 474.85 0 485.623Z" fill="#2D7EFA"/>
                      <path d="M0 581.326C0 592.099 6.3468 597.193 14.1133 592.767C21.8798 588.258 28.2266 575.898 28.2266 565.042C28.2266 554.269 21.8798 549.175 14.1133 553.601C6.26329 558.194 0 570.553 0 581.326Z" fill="#2D7EFA"/>
                      <path d="M60.2112 497.481C60.2112 508.254 66.558 513.348 74.3245 508.922C82.0909 504.413 88.4378 492.053 88.4378 481.197C88.4378 470.424 82.0909 465.33 74.3245 469.756C66.558 474.182 60.2112 486.709 60.2112 497.481Z" fill="#DD81FF"/>
                      <path d="M453.88 211.458L313.916 292.213V551.513L453.88 470.758V211.458Z" fill="#333333"/>
                      <path opacity="0.15" d="M440.184 365.368L327.779 430.255V441.613L440.184 376.809V365.368Z" fill="white"/>
                      <path opacity="0.15" d="M432.334 392.091L335.712 447.876V459.234L432.334 403.449V392.091Z" fill="white"/>
                      <path d="M391.498 438.44L488.871 382.237V411.215L391.498 467.418V438.44Z" fill="#DD81FF"/>
                      <path d="M368.031 313.424C368.031 325.951 375.297 331.88 384.232 326.702C393.168 321.441 400.433 307.077 400.433 294.467C400.433 281.941 393.168 276.011 384.232 281.189C375.297 286.45 368.031 300.897 368.031 313.424Z" fill="#DD81FF"/>
                      <path d="M384.232 336.807C398.679 328.373 410.621 336.306 412.709 354.428C413.043 357.601 410.705 361.777 407.782 363.447L360.682 391.006C357.759 392.676 355.421 391.34 355.755 387.749C357.843 367.038 369.785 345.242 384.232 336.807Z" fill="#DD81FF"/>
                      <path opacity="0.2" d="M248.36 738.41C298.884 673.439 262.307 649.889 248.36 687.969C234.331 666.09 197.836 731.729 248.36 738.41Z" fill="url(#paint4_linear)"/>
                      <defs>
                        <linearGradient id="paint0_linear" x1="49.1003" y1="122.199" x2="304.679" y2="354.905" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white"/>
                          <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="-83.1618" y1="267.42" x2="172.417" y2="500.126" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white"/>
                          <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="90.8716" y1="155.42" x2="346.451" y2="388.126" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white"/>
                          <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear" x1="-41.391" y1="300.641" x2="214.189" y2="533.347" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white"/>
                          <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear" x1="237.662" y1="690.475" x2="275.044" y2="722.768" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white"/>
                          <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                      </defs>
                      </svg>
                  </div>
                  <div className={styles.description}>
                    <strong>Atrai clientes com seus conteudos</strong>
                    <h3>Marketing De Conteúdo</h3>
                    <p>Com o marketing de conteúdo, sua construtora atrairá o seu público de maneira natural e crescente, Através de um conteúdo de qualidade e relevante.</p>
                  </div>
                </article>
                <article>
                  <div className={styles.description}>
                    <strong>Tenha um site que converta</strong>
                    <h3>Email Marketing</h3>
                    <p>Cuidaremos de toda a estratégia, criação, envio e monitoramento das campanhas de e-mail marketing para sua empresa.</p>
                  </div>
                  <div>
                    <svg width="589" height="681" viewBox="0 0 589 681" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.2" d="M250.492 1.59494L589 380.249L250.416 368.129C247.916 368.053 245.19 363.963 245.795 361.236L279.881 209.896L450.461 295.337L277.836 182.552L245.871 3.26135C245.265 -0.222961 247.992 -1.13191 250.492 1.59494Z" fill="url(#paint0_linear)"/>
                      <path opacity="0.5" d="M224.511 20.4558L563.019 399.109L224.435 386.99C221.935 386.914 219.209 382.824 219.815 380.097L253.824 228.833L424.404 314.274L251.931 201.413L219.89 22.1222C219.284 18.6379 222.011 17.7289 224.511 20.4558Z" fill="url(#paint1_linear)"/>
                      <path d="M249.431 420.47L24.0115 290.338L24.0872 407.82L229.586 526.438L249.507 555.903L249.431 420.47Z" fill="#333333"/>
                      <path d="M0 336.165V304.276L85.0626 353.359V385.248L0 336.165Z" fill="#DD81FF"/>
                      <path opacity="0.15" d="M191.486 415.622L142.099 387.142V397.443L191.486 425.923V415.622Z" fill="white"/>
                      <path opacity="0.15" d="M191.486 436.225L96.2732 381.309V391.611L191.486 446.526V436.225Z" fill="white"/>
                      <path opacity="0.15" d="M191.561 456.903L76.2004 390.323V400.624L191.561 467.205V456.903Z" fill="white"/>
                      <path d="M203.681 433.346C203.681 443.042 209.437 454.176 216.482 458.267C223.526 462.357 229.283 457.812 229.283 448.117C229.283 438.421 223.526 427.287 216.482 423.196C209.362 419.106 203.681 423.651 203.681 433.346Z" fill="#DD81FF"/>
                      <path d="M268.898 323.439L494.318 453.571L494.393 571.053L288.819 452.359L268.974 458.873L268.898 323.439Z" fill="#333333"/>
                      <path d="M428.722 474.249V442.36L513.784 491.444V523.333L428.722 474.249Z" fill="#2D7EFA"/>
                      <path opacity="0.15" d="M326.844 385.475L376.23 413.956V424.257L326.844 395.777V385.475Z" fill="white"/>
                      <path opacity="0.15" d="M326.844 406.154L415.996 457.585V467.887L326.844 416.455V406.154Z" fill="white"/>
                      <path opacity="0.15" d="M326.919 426.757L442.28 493.337V503.639L326.919 437.058V426.757Z" fill="white"/>
                      <path d="M314.724 389.187C314.724 398.882 308.967 403.427 301.923 399.337C294.879 395.246 289.122 384.112 289.122 374.416C289.122 364.721 294.879 360.176 301.923 364.266C308.967 368.357 314.724 379.567 314.724 389.187Z" fill="#2D7EFA"/>
                      <path d="M525.146 610.667L390.546 532.952V603.093L525.146 680.808V610.667Z" fill="#333333"/>
                      <path opacity="0.15" d="M425.01 569.765L465.459 593.171V601.578L425.01 578.173V569.765Z" fill="white"/>
                      <path opacity="0.15" d="M425.01 586.656L511.209 636.421V644.981L425.01 595.216V586.656Z" fill="white"/>
                      <path d="M417.89 572.264C417.89 578.021 414.481 580.748 410.24 578.324C405.998 575.9 402.589 569.234 402.589 563.478C402.589 557.721 405.998 554.994 410.24 557.418C414.481 559.842 417.89 566.508 417.89 572.264Z" fill="#2D7EFA"/>
                      <path d="M152.477 503.108L17.8762 425.393V495.534L152.477 573.249V503.108Z" fill="#333333"/>
                      <path opacity="0.15" d="M52.3406 462.206L92.7889 485.612V494.019L52.3406 470.614V462.206Z" fill="white"/>
                      <path opacity="0.15" d="M52.3406 479.097L138.539 528.862V537.421L52.3406 487.656V479.097Z" fill="white"/>
                      <path d="M45.2203 464.705C45.2203 470.462 41.8118 473.189 37.57 470.765C33.3282 468.341 29.9197 461.675 29.9197 455.919C29.9197 450.162 33.3282 447.435 37.57 449.859C41.8118 452.283 45.2203 458.948 45.2203 464.705Z" fill="#DD81FF"/>
                      <path opacity="0.2" d="M171.792 280.037L139.372 261.327V250.42L171.792 269.129C174.443 270.644 178.306 273.75 181.563 278.522C185.123 283.597 187.622 290.035 187.622 297.004C187.622 304.73 185.653 309.123 181.942 310.335C178.457 311.471 174.291 309.502 171.792 308.063L158.46 300.336L158.385 300.261C157.248 299.579 155.43 298.897 153.991 299.352C152.779 299.73 151.492 300.867 151.492 305.184C151.492 309.502 152.855 312.077 153.916 313.668C155.279 315.637 157.097 317.001 158.233 317.607L158.385 317.682L199.136 341.239V352.147L158.612 328.741C155.809 327.302 151.795 324.196 148.31 319.349C144.523 313.971 141.948 307.229 141.948 299.73C141.948 292.232 144.523 288.444 148.235 287.384C151.719 286.399 155.733 287.838 158.536 289.505L171.716 297.079C173.609 298.216 175.049 298.67 176.033 298.367C176.791 298.14 178.154 297.079 178.154 291.55C178.154 287.914 177.018 285.566 175.882 284.051C174.594 282.082 172.852 280.643 171.792 280.037Z" fill="white"/>
                      <path d="M145.281 258.979C145.281 268.751 139.524 273.371 132.48 269.357C125.435 265.266 119.678 254.056 119.678 244.209C119.678 234.438 125.435 229.817 132.48 233.832C139.524 237.922 145.281 249.208 145.281 258.979Z" fill="#DD81FF"/>
                      <path d="M215.724 355.934C215.724 365.706 209.967 370.326 202.923 366.312C195.879 362.221 190.122 351.011 190.122 341.164C190.122 331.393 195.879 326.772 202.923 330.787C209.967 334.877 215.724 346.163 215.724 355.934Z" fill="#2D7EFA"/>
                      <path opacity="0.2" d="M305.71 512.501V576.355C305.71 577.036 306.392 577.794 306.847 577.567L321.769 568.401L336.993 595.367C337.827 596.806 339.266 596.958 339.266 595.594V531.968L305.71 512.501Z" fill="url(#paint2_linear)"/>
                      <defs>
                      <linearGradient id="paint0_linear" x1="462.23" y1="131.549" x2="307.977" y2="335.253" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"/>
                      <stop offset="1" stop-color="white" stop-opacity="0"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear" x1="436.284" y1="150.417" x2="282.031" y2="354.121" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"/>
                      <stop offset="1" stop-color="white" stop-opacity="0"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear" x1="336.999" y1="545.141" x2="298.807" y2="569.328" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"/>
                      <stop offset="1" stop-color="white" stop-opacity="0"/>
                      </linearGradient>
                      </defs>
                      </svg>
                  </div>
                </article>
              </div>
        </section>
        <section className={styles.containerCallToActionForm}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h2>Quer impulsionar a sua construtora hoje com uma CONSULTORIA GRATUITA?</h2>
              <p>Tome hoje a decisão de remodelar toda a operação da sua empresa através de processos bem definidos por um software totalmente personalizado. Feito Sob medida para o seu sucesso!</p>
            </div>
            <div className={styles.containerContact}>
              <div>
                <ul>
                  <li>
                      <ImWhatsapp size={64} />
                    <div> 
                      <strong>Mande uma mensagem para o nosso Whats.</strong>
                      <p>Entre em contato agora mesmo conosco através do WhatsApp e receba um atendimento mais rápido.</p>
                      <a href="#">(21) (97945-2736)</a>
                    </div>
                  </li>
                  <li>
                      <AiFillPhone size={64} />
                    <div> 
                      <strong>Fique a vontade para nos ligar!</strong>
                      <p>Faça uma ligação para esclarecer suas dúvidas sobre os nossos serviços ou para solicitar um orçamento.</p>
                      <a href="#">(21) 3549-1062</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Receba um orçamento de desenvolvimento!</h2>
                <p>Deixe aqui os  seus dados  para que entremos em contato contigo para batermos um papo sobre o seu negócio e montarmos uma proposta de desenvolvimento.</p>
                <form ref={formRefContact} onSubmit={handleSubmitForm}>
                  <Input name="first_name" placeholder="Primeiro nome" />
                  <Input name="email" type="email" placeholder="Seu melhor E-mail" />
                  <Input name="whatsapp_phone" placeholder="WhatsApp: (Celular com DDD)" />
                  <Button>Receber orçamento</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.containerNewsleter}>
          <div className={styles.content}>
            <div>
                <strong>Newsletter Exponencial</strong>
                <p>Seja o primeiro a receber os nossos conteudos e novidades.</p>
            </div>
            <form>
              <Input type="email" name="email" placeholder="Seu melhor E-mail"/>
              <Button>Inscrever-se</Button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
