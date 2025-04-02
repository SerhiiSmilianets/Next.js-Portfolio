import {Company} from '@/interfaces';
import { CompanyComponent } from "./company/company";

export const WorkingExperience = ({companies} : {companies:Company[]})  => {
    return (
        <ul>
            {companies && companies.length && (
                <>
                    {companies.map((company : Company) => (
                        <CompanyComponent key={company.id} companyData={company}/>
                    ))}
                </>
            )}
        </ul>
    )
}
