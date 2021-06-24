import { FormEvent, useEffect, useRef } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Lottie from 'react-lottie';

import * as animationData from '../assets/64793-rocket-rider-mit-meetanshi.json';
import { ImWhatsapp } from 'react-icons/im';
import { AiFillPhone } from 'react-icons/ai';

import gsap, { Back } from 'gsap';

import { CardGlass } from '../components/CardGlass';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
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
                    <Image 
                      src="/images/illustrations/google-ads.svg"
                      height={589}
                      width={587.61}
                      alt="Google ads"
                    />
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
                  <Image 
                      src="/images/illustrations/website.svg"
                      height={730.37}
                      width={598}
                      alt="Criação de website"
                    />
                  </div>
                </article>
                <article>
                  <div>
                    <Image 
                        src="/images/illustrations/marketing-content.svg"
                        height={730.37}
                        width={598}
                        alt="Marketing de Conteúdo"
                      />  
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
                    <Image 
                      src="/images/illustrations/email-marketing.svg"
                      height={680.81}
                      width={598}
                      alt="Email Marketing"
                    />  
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
