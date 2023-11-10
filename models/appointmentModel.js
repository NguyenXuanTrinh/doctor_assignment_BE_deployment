import { model, Schema, Types } from 'mongoose';

export const COLLECTION_NAME = 'Appointment';
export const DOCUMENT_NAME = 'Appointment';

const AppointmentSchema = new Schema(
{
    // id: {
    //   type: Number,
    //   trim: true,
    //   unique: true,
    //   required: true,
    // },
    date: {
        type: Date,
        
    },
    patientPhoneNumber: {
        type: String,
        ref: "User"
    },
    hospital: {
      type: Number,
      ref: "Hospital"
    },
    symptomsList: {
        type: [String],
    },
    address: {
        type: [Number],
        // required: true,
    }
},
  {
    timestamps: true,
  }
);

export const AppointmentModel = model(DOCUMENT_NAME, AppointmentSchema, COLLECTION_NAME);
