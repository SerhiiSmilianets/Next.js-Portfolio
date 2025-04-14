"use client"

import { Company } from '@/interfaces';
import { CompanyComponent } from "./company/company";
import { useState, useEffect } from 'react';
// import "@/app/globals.css"
import styles from "@/styles/modules/experience.module.css"

export const WorkingExperience = ({companies} : {companies:Company[]})  => {
    const [companiesData, setCompaniesData] = useState<Company[]>([]);
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(companiesData[0] || null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        console.log("Companies data: ", companies);
        try{
            setCompaniesData(companies);
            setSelectedCompany(companies[0] || null);
        } catch (error) {
            console.error("Error fetching companies data: ", error);
        } finally {
            setIsLoading(false);
        }

    }, [companies]);

    const selectCompany = (company: Company) => {
        setSelectedCompany(company);
    }

    return (
        <div className={`${styles.experienceContainer} animate-fadeIn`}>
            <div className="flex overflow-x-auto">
                {isLoading ? (
                        <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-gray-500">
                            Loading...
                        </div>
                    ) : companiesData && companiesData.length ? (
                        <>
                            {companiesData.map((company : Company) => (
                                <button key={company.id} className={`${styles.companyTab} ${selectedCompany && selectedCompany.id === company.id ? styles.active : "" }`} onClick={() => selectCompany(company)}>
                                    {company.companyName}
                                </button>
                            ))}
                        </>
                    ) : (
                        <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-gray-500">
                            No experience found
                        </div>
                    )
                }
            </div>
            <div>
                {selectedCompany && (
                    <CompanyComponent companyData={selectedCompany} />
                )}
            </div>
        </div>
        
    )
}
