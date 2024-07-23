import mongoose from 'mongoose';

const medicalRecordSchema = new mongooseSchema({}, { timestamp: true });

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
