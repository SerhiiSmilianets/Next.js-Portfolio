import { CertificateData } from "@/types";
import Image from "next/image";

export const CertificatesSection = ({ certificates }: { certificates: CertificateData[] }) => {
    return (
        <>
            {certificates.length > 0 && (
                <>
                    <h2 className="section-title animate-fadeIn">Certificates:</h2>
                    <section className="section-container animate-fadeIn">
                        <div className="certificates-container">
                            {certificates.map((certificate) => (
                                <div key={certificate.id} className="certificate-item">
                                    <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
                                        {certificate.icon ? (
                                            <Image src={`/certificatesLogos/${certificate.icon}`} 
                                                alt={certificate.title} 
                                                width={125}
                                                height={125}
                                                className='certificate-logo'  
                                            />
                                        ) : (
                                            <h3 className="certificate-title">{certificate.title}</h3>
                                        )}
                                    </a>
                                    <span className="certificate-tooltip">{certificate.title}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            )}
        </>
    )
}
