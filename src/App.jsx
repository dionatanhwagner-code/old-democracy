import React, { useState } from 'react';

export default function App() {
  const whatsappNumber = "5554991047177"; 
  const whatsappMessage = encodeURIComponent("Olá! Vim pelo site oficial e gostaria de contratar a banda Old Democracy para um show.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Estado para controlar qual integrante está aberto no modal (null se nenhum)
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    { name: "Gabi", role: "Vocal", img: "/gabi.jpeg", bio: "A voz e a atitude à frente da Old Democracy, entregando performance vocal visceral nos palcos." },
    { name: "Marcio Paviani", role: "Guitarra", img: "/marcio.jpeg", bio: "Riffs marcantes e solos afiados que sustentam a essência do mais puro rock clássico." },
    { name: "Ariel", role: "Baixo", img: "/ariel.jpeg", bio: "O groove e o peso nas quatro cordas que fazem qualquer pista vibrar junto com a banda." },
    { name: "Rafa MadVision", role: "Bateria", img: "/rafa.jpeg", bio: "A energia implacável nas baquetas ditando o ritmo e a pulsação de cada clássico." },
    { name: "Willian", role: "Teclado", img: "/willian.jpeg", bio: "Camadas harmônicas e timbres clássicos que completam a sonoridade inconfundível da banda." },
  ];

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#f3f4f6', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      {/* HEADER / NAVBAR */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(10,10,10,0.95)', borderBottom: '1px solid #262626', backdropFilter: 'blur(8px)' }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto', padding: '0 16px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* LOGOTIPO DA BANDA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="/logo.jpeg" 
              alt="Old Democracy Logo" 
              style={{ height: '45px', width: 'auto', borderRadius: '4px', objectFit: 'contain' }} 
            />
            <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '1px', color: '#ff6600', textTransform: 'uppercase' }}>
              Old Democracy
            </span>
          </div>

          <nav style={{ display: 'flex', gap: '32px', fontSize: '0.875rem', fontWeight: 500, color: '#d1d5db' }}>
            <a href="#sobre" style={{ color: 'inherit', textDecoration: 'none' }}>A Banda</a>
            <a href="#som" style={{ color: 'inherit', textDecoration: 'none' }}>O Som</a>
            <a href="#integrantes" style={{ color: 'inherit', textDecoration: 'none' }}>Integrantes</a>
            <a href="#contato" style={{ color: 'inherit', textDecoration: 'none' }}>Contato</a>
          </nav>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#ff6600', color: '#ffffff', padding: '10px 20px', borderRadius: '9999px', fontWeight: 'bold', fontSize: '0.875rem', textDecoration: 'none', boxShadow: '0 4px 12px rgba(255,102,0,0.3)' }}
          >
            Contrate (WhatsApp)
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ padding: '110px 16px', textAlign: 'center', background: 'linear-gradient(to bottom, #141414, #0a0a0a)', borderBottom: '1px solid #262626' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
          <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, backgroundColor: 'rgba(255,102,0,0.1)', color: '#ff6600', border: '1px solid rgba(255,102,0,0.3)' }}>
            Rock Clássico • Carazinho (RS)
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, textTransform: 'uppercase', margin: 0 }}>
            O Puro <span style={{ color: '#ff6600', textShadow: '0 0 15px rgba(255, 102, 0, 0.4)' }}>Rock 'n' Roll</span> na Estrada
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#9ca3af', maxWidth: '600px', margin: 0, lineHeight: 1.6 }}>
            Energia visceral, peso e os maiores clássicos da história do rock reunidos com atitude inconfundível.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '16px', width: '100%' }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#ff6600', color: '#ffffff', padding: '16px 32px', borderRadius: '9999px', fontWeight: 'bold', fontSize: '1rem', textDecoration: 'none', boxShadow: '0 6px 20px rgba(255,102,0,0.4)' }}
            >
              Falar com Marcio (WhatsApp)
            </a>
            <a
              href="https://www.instagram.com/olddemocracy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#171717', color: '#e5e7eb', border: '1px solid #404040', padding: '16px 32px', borderRadius: '9999px', fontWeight: 'bold', fontSize: '1rem', textDecoration: 'none' }}
            >
              Instagram @olddemocracy
            </a>
          </div>
        </div>
      </section>

      {/* VÍDEO EM DESTAQUE */}
      <section id="som" style={{ padding: '80px 16px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', margin: '0 0 8px 0' }}>Som Autoral & Mídia</h2>
          <p style={{ color: '#9ca3af', margin: 0 }}>Ouça o peso do nosso som oficial no YouTube</p>
        </div>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden', border: '1px solid #262626', boxShadow: '0 10px 30px rgba(0,0,0,0.8)', backgroundColor: '#171717' }}>
          <iframe
            style={{ width: '100%', height: '100%', border: 'none' }}
            src="https://www.youtube.com/embed/UAf29SECNtI"
            title="Old Democracy - Quando o Silêncio Sangra [Vídeo Oficial]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* A BANDA & HISTÓRIA (COM O NOVO TEXTO) */}
      <section id="sobre" style={{ padding: '80px 16px', backgroundColor: 'rgba(20,20,20,0.5)', borderTop: '1px solid #262626', borderBottom: '1px solid #262626' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', margin: '0 0 12px 0' }}>A Raiz e a Energia na Estrada</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#ff6600', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>
          
          <div style={{ fontSize: '1.05rem', color: '#d1d5db', lineHeight: 1.8, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ margin: 0 }}>
              Nascida em meados de 2022 em Carazinho (RS), a <strong style={{ color: '#ffffff' }}>Old Democracy</strong> consolidou-se como referência obrigatória para quem busca o mais puro e visceral rock 'n' roll ao vivo. Mais do que tocar clássicos, a banda entrega uma experiência imersiva e nostálgica que conecta diferentes gerações.
            </p>
          </div>

          {/* O SHOW */}
          <div style={{ backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '16px', padding: '28px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ff6600', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
              O Show: O Clássico que o Público Ama
            </h3>
            <p style={{ fontSize: '1rem', color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>
              Com um repertório ultra calibrado que passa por monstros sagrados como <span style={{ color: '#ff6600', fontWeight: 600 }}>AC/DC, Metallica, Van Halen, Ozzy Osbourne, Tina Turner e Bon Jovi</span> — além daquela eletricidade inconfundível dos anos 80 inspirada em clássicos do cinema —, o show da Old Democracy é sinônimo de pista cheia, energia lá no alto e muita interatividade com o público.
            </p>
          </div>

          {/* PROFISSIONALISMO PARA O EVENTO */}
          <div style={{ backgroundColor: '#171717', border: '1px solid rgba(255,102,0,0.4)', borderRadius: '16px', padding: '28px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ff6600', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
              Profissionalismo para o seu Evento
            </h3>
            <p style={{ fontSize: '1rem', color: '#d1d5db', lineHeight: 1.7, margin: '0 0 16px 0' }}>
              Seja para festivais, pubs, eventos privados ou moto-encontros, entregamos estrutura impecável, pontuação rigorosa de horários e uma performance de palco magnética comandada por <strong style={{ color: '#ffffff' }}>Gabi (vocal), Marcio Paviani (guitarra), Ariel (baixo), Rafa MadVision (bateria) e Willian (teclado)</strong>.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 'bold', margin: 0 }}>
              Quer lotar a sua casa e garantir a entrega perfeita? <span style={{ color: '#ff6600' }}>A Old Democracy faz acontecer.</span>
            </p>
          </div>

        </div>
      </section>

      {/* INTEGRANTES (COM MODAL CLICÁVEL) */}
      <section id="integrantes" style={{ padding: '80px 16px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', margin: '0 0 8px 0' }}>A Formação</h2>
          <p style={{ color: '#9ca3af', margin: 0 }}>Clique em cada integrante para ver detalhes e fotos</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
          {members.map((member, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedMember(member)}
              style={{ backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '12px', padding: '24px 16px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ff6600'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#262626'}
            >
              <div style={{ width: '60px', height: '60px', backgroundColor: 'rgba(255,102,0,0.1)', color: '#ff6600', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontWeight: 'bold', fontSize: '1.25rem', border: '1px solid rgba(255,102,0,0.3)' }}>
                {member.name.charAt(0)}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#ffffff', margin: '0 0 6px 0' }}>{member.name}</h3>
              <p style={{ fontSize: '0.875rem', color: '#ff6600', fontWeight: 600, margin: 0 }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL DO INTEGRANTE */}
      {selectedMember && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '16px' }}>
          <div style={{ backgroundColor: '#141414', border: '1px solid #ff6600', borderRadius: '16px', maxWidth: '400px', width: '100%', padding: '32px', textAlign: 'center', position: 'relative', boxShadow: '0 10px 30px rgba(255,102,0,0.2)' }}>
            <button 
              onClick={() => setSelectedMember(null)}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: '#9ca3af', fontSize: '1.25rem', cursor: 'pointer', fontWeight: 'bold' }}
            >
              ✕
            </button>
            
            {/* Foto ou Placeholder */}
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 20px auto', border: '2px solid #ff6600', backgroundColor: '#1f1f1f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={selectedMember.img} 
                alt={selectedMember.name} 
                onError={(e)=>{e.target.style.display='none'}}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <span style={{ position: 'absolute', fontSize: '2.5rem', color: '#ff6600', opacity: 0.3 }}>🎸</span>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ffffff', margin: '0 0 4px 0' }}>{selectedMember.name}</h3>
            <p style={{ fontSize: '1rem', color: '#ff6600', fontWeight: 700, margin: '0 0 16px 0', textTransform: 'uppercase' }}>{selectedMember.role}</p>
            <p style={{ fontSize: '0.95rem', color: '#d1d5db', lineHeight: 1.6, margin: '0 0 24px 0' }}>{selectedMember.bio}</p>
            
            <button
              onClick={() => setSelectedMember(null)}
              style={{ backgroundColor: '#ff6600', color: '#ffffff', border: 'none', padding: '10px 24px', borderRadius: '9999px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.875rem' }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* CONTATO & CONTRATAÇÃO */}
      <section id="contato" style={{ padding: '80px 16px', backgroundColor: 'rgba(20,20,20,0.5)', borderTop: '1px solid #262626', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', margin: 0 }}>Contrate a Banda</h2>
          <p style={{ color: '#9ca3af', margin: 0 }}>
            Leve o melhor do rock clássico para o seu evento, pub ou festival. Fale diretamente com nossa produção.
          </p>
          <div style={{ backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '16px', padding: '32px', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffffff', margin: 0 }}>Contato Comercial / WhatsApp</h3>
            <p style={{ fontSize: '1.1rem', color: '#ff6600', fontWeight: 'bold', margin: 0 }}>(54) 99104-7177 — Marcio Paviani</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', backgroundColor: '#ff6600', color: '#ffffff', fontWeight: 'bold', padding: '14px 32px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', boxShadow: '0 4px 15px rgba(255,102,0,0.4)', marginTop: '8px' }}
            >
              Chamar no WhatsApp Agora
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#050505', borderTop: '1px solid #262626', padding: '40px 16px', textAlign: 'center', fontSize: '0.875rem', color: '#6b7280' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Old <span style={{ color: '#ff6600' }}>Democracy</span>
          </div>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} Old Democracy. Todos os direitos reservados. Carazinho - RS.</p>
        </div>
      </footer>

    </div>
  );
}