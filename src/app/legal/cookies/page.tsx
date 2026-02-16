import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Cookies | KOC Technical System",
    description: "Información sobre el uso de cookies en el sitio web de KOC Technical System.",
};

export default function CookiesPage() {
    return (
        <main className="min-h-screen font-poppins text-gray-800 bg-white pt-32 pb-20 md:pt-36">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-gray-900 mb-8 border-b border-gray-100 pb-8 uppercase">
                        Política de Cookies
                    </h1>

                    <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
                        <section>
                            <p className="mb-4">
                                KOC TECHNICAL SYSTEM S.L. informa acerca del uso de las cookies en su página web: www.koctsystem.com
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat uppercase">¿Qué son las cookies?</h2>
                            <p className="mb-4">
                                Las cookies son archivos que se pueden descargar en su equipo a través de las páginas web. Son herramientas que tienen un papel esencial para la prestación de numerosos servicios de la sociedad de la información. Entre otros, permiten a una página web almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información obtenida, se pueden utilizar para reconocer al usuario y mejorar el servicio ofrecido.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat uppercase">Tipos de cookies</h2>
                            <p className="mb-4">
                                Según quien sea la entidad que gestione el dominio desde donde se envían las cookies y trate los datos que se obtengan se pueden distinguir dos tipos:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mb-4 ml-2">
                                <li><strong>Cookies propias:</strong> aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.</li>
                                <li><strong>Cookies de terceros:</strong> aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat uppercase">Cookies utilizadas en la web</h2>
                            <p className="mb-4">
                                A continuación se identifican las cookies que están siendo utilizadas en este portal así como su tipología y función:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-base mb-4">
                                <ul className="space-y-4">
                                    <li>
                                        <span className="font-bold text-gray-900 block mb-1">Cookies técnicas (Necesarias)</span>
                                        Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existan. Por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, etc.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900 block mb-1">Cookies de análisis</span>
                                        Son aquellas que permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat uppercase">Aceptación de la Política de cookies</h2>
                            <p className="mb-4">
                                Nuestra web asume que usted acepta el uso de cookies. No obstante, muestra información sobre su Política de cookies en la parte inferior o superior de cualquier página del portal con cada inicio de sesión con el objeto de que usted sea consciente.
                            </p>
                            <p>
                                Ante esta información es posible llevar a cabo las siguientes acciones:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4 ml-2">
                                <li><strong>Aceptar cookies:</strong> No se volverá a visualizar este aviso al acceder a cualquier página del portal durante la presente sesión.</li>
                                <li><strong>Cerrar:</strong> Se oculta el aviso en la presente página.</li>
                                <li><strong>Modificar su configuración:</strong> Podrá obtener más información sobre qué son las cookies, conocer la Política de cookies de KOC TECHNICAL SYSTEM y modificar la configuración de su navegador.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
