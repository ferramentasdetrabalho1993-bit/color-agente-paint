export function BenefitsBar() {
  const benefits = [
    {
      icon: "🎨",
      title: "CRIATIVIDADE",
      description: "Momentos divertidos para colorir e criar."
    },
    {
      icon: "📖",
      title: "APRENDIZADO",
      description: "Uma forma lúdica de conhecer a história de Noé."
    },
    {
      icon: "❤️",
      title: "MOMENTO EM FAMÍLIA",
      description: "Uma atividade para pais e filhos compartilharem."
    },
    {
      icon: "🐘",
      title: "DIVERSÃO",
      description: "Animais e cenas da Arca para explorar."
    }
  ];

  return (
    <div className="bg-blue-600 py-8 relative z-20 -mt-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <span className="text-4xl mb-3">{benefit.icon}</span>
              <h3 className="text-white font-bold font-heading text-lg mb-1">{benefit.title}</h3>
              <p className="text-blue-100 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
