// src/components/cv/CVDocument.tsx
import React, { ReactElement } from 'react';
import {
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  DocumentProps,
  Image,
  Link
} from '@react-pdf/renderer';

import { CVData } from '@/interfaces';
import { workingPeriod } from '@/lib/dateHelper';

Font.register({
  family: 'Roboto',
  src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Me5Q.ttf'
});

const icons = {
  email: `${process.env.BASE_URL}/cv-icons/email.png`,
  phone: `${process.env.BASE_URL}/cv-icons/phone.png`,
  linekedIn: `${process.env.BASE_URL}/cv-icons/linkedin.png`,
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 30,
    fontSize: 10,
    fontFamily: 'Helvetica'
  },
  section: {
    marginBottom: 10
  },
  heading: {
    fontSize: 24,
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#000'
  },
  jobTitle: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#2563EB'
  },
  subheading: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 2
  },
  text: {
    marginBottom: 2
  },
  photo: {
    width: 80,
    borderRadius: 5
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    marginTop: 0,
    marginBottom: 3
  },
  contactElement: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4
  }
});

export const CVDocument = ({ data, summary }: { data: CVData, summary: string }): ReactElement<DocumentProps> => {
  return (
    <>
      <Page size="A4" style={styles.page}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: 10 }}>
            <Text style={styles.heading}>{data.personalInfo.name}</Text>
            <Text style={styles.jobTitle}>{data.personalInfo.mainTitle}</Text>
            {/* {data.personalInfo.secondaryTitles.map((title, i) => (
              <Text key={i}>{title}</Text>
            ))} */}
            <View style={styles.contactElement}>
              <Image src={icons.email} style={{ width: 10, height: 10, marginRight: 3 }} />
              <Text>{data.contactInfo.Email}</Text>
            </View>
            <View style={styles.contactElement}>
              <Image src={icons.phone} style={{ width: 10, height: 10, marginRight: 3 }} />
              <Text>{data.contactInfo.Phone}</Text>
            </View>
            <View style={styles.contactElement}>
              <Link src={data.contactInfo.LinkedIn} style={{textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Image src={icons.linekedIn} style={{ width: 10, height: 10, marginRight: 3 }} />
                <Text>LinkedIn</Text>
              </Link>
            </View>
          </View>
          <Image
            style={styles.photo}
            src={`${process.env.BASE_URL}/avatar.png`}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>SUMMARY</Text>
          <View style={styles.line} />
          <Text style={styles.text}>{summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>SKILLS</Text>
          <View style={styles.line} />
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Stack:</Text> {data.skills.skillStack.join(', ')}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Tools:</Text> {data.skills.tools.join(', ')}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Databases:</Text> {data.skills.databases.join(', ')}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Other:</Text> {data.skills.other.join(', ')}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>EXPERIENCE</Text>
          <View style={styles.line} />
          {data.companies.map(company => {
            const {start, end} = workingPeriod(company.start_date, company.end_date);
            return (<View key={company.id} style={{ marginBottom: 6 }}>
                <Text style={{ fontWeight: 'bold' }}>{company.companyName} ({start} – {end})</Text>
                <Text>Position: {company.position}</Text>
                <Text>Projects:</Text>
                {company.projects.map(proj => {
                  const project = data.projects.find(p => p.id === proj.id);
                  return project ? (
                    <View key={proj.id} style={{ marginLeft: 10, marginBottom: 4 }}>
                      <Text style={{ fontWeight: 'bold' }}>{project.project_name}</Text>
                      <Text>Role: {project.role}</Text>
                      <Text>Team size: {project.team_size}</Text>
                      <Text>Technologies: {project.technicalStack.join(', ')}</Text>
                      <Text>Responsibilities:</Text>
                      {project.responsibilities.map((r, i) => (
                        <Text key={i} style={{ marginLeft: 10 }}>- {r}</Text>
                      ))}
                    </View>
                  ) : null;
                })}
              </View>
            );
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>EDUCATION</Text>
          <View style={styles.line} />
          <Text>{data.personalInfo.education} — {data.personalInfo.educationPlace}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>CERTIFICATIONS</Text>
          <View style={styles.line} />
          {/* {data.projects.length > 0 && (
            <Text>{data.certifications?.join(', ')}</Text>
          )} */}
        </View>
      </Page>
    </>
  );
};
