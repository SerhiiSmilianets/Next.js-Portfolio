// src/components/cv/CVDocument.tsx
import React, { ReactElement } from 'react';
import {
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  DocumentProps
} from '@react-pdf/renderer';

import { CVData } from '@/interfaces';

Font.register({
  family: 'Roboto',
  src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Me5Q.ttf'
});

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
    fontSize: 14,
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#1a1a1a'
  },
  subheading: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 2
  },
  text: {
    marginBottom: 2
  }
});

export const CVDocument = ({ data }: { data: CVData }): ReactElement<DocumentProps> => {
  return (
    <>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>{data.personalInfo.name}</Text>
          <Text>{data.personalInfo.mainTitle}</Text>
          {data.personalInfo.secondaryTitles.map((title, i) => (
            <Text key={i}>{title}</Text>
          ))}
          <Text>{data.contactInfo.email} | {data.contactInfo.phone} | LinkedIn: {data.contactInfo.linkedin}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>SUMMARY</Text>
          <Text style={styles.text}>{data.personalInfo.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>SKILLS</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Stack:</Text> {data.skills.skillStack.join(', ')}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Tools:</Text> {data.skills.tools.join(', ')}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Databases:</Text> {data.skills.databases.join(', ')}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Other:</Text> {data.skills.other.join(', ')}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>EXPERIENCE</Text>
          {data.companies.map(company => (
            <View key={company.id} style={{ marginBottom: 6 }}>
              <Text style={{ fontWeight: 'bold' }}>{company.companyName} ({company.start_date} – {company.end_date})</Text>
              <Text>Position: {company.position}</Text>
              <Text>Projects:</Text>
              {company.projects.map(proj => {
                const project = data.projects.find(p => p.id === proj.id);
                return project ? (
                  <View key={proj.id} style={{ marginLeft: 10, marginBottom: 4 }}>
                    <Text style={{ fontWeight: 'bold' }}>{project.project_name}</Text>
                    <Text>Role: {project.role} | Team size: {project.team_size}</Text>
                    <Text>Technologies: {project.technicalStack.join(', ')}</Text>
                    <Text>Responsibilities:</Text>
                    {project.responsibilities.map((r, i) => (
                      <Text key={i} style={{ marginLeft: 10 }}>- {r}</Text>
                    ))}
                  </View>
                ) : null;
              })}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>EDUCATION</Text>
          <Text>{data.personalInfo.education} — {data.personalInfo.educationPlace}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>CERTIFICATIONS</Text>
          {/* {data.projects.length > 0 && (
            <Text>{data.certifications?.join(', ')}</Text>
          )} */}
        </View>
      </Page>
    </>
  );
};