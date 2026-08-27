import mongoose, { Schema, model, models } from 'mongoose';


export interface IRestaurant {
  _id: mongoose.Types.ObjectId;
  name: string;
  slug: string;
  logo?: string;
  coverImage?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  openingHours: {
    day: string;
    open: string;
    close: string;
    isClosed: boolean;
  }[];
  owner: mongoose.Types.ObjectId;
  settings: {
    taxRate: number;
    currency: string;
    serviceCharge: number;
    timezone: string;
  };
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const restaurantSchema = new Schema<IRestaurant>(
  {
    name: {
      type: String,
      required: [true, 'Restaurant name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'],
    },
    logo: {
      type: String,
      default: '',
    },
    coverImage: {
      type: String,
      default: '',
    },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
      country: { type: String, default: 'Pakistan' },
    },
    contact: {
      phone: { type: String, required: true },
      email: { type: String, required: true },
      website: { type: String, default: '' },
    },
    openingHours: [
      {
        day: {
          type: String,
          enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
        open: { type: String, default: '09:00' },
        close: { type: String, default: '22:00' },
        isClosed: { type: Boolean, default: false },
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    settings: {
      taxRate: { type: Number, default: 13 },
      currency: { type: String, default: 'USD' },
      serviceCharge: { type: Number, default: 0 },
      timezone: { type: String, default: 'Asia/Karachi' },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);


restaurantSchema.pre('save', function (next:any) {
  if (!this.slug) {
    this.slug = this.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }
  next();
});

const Restaurant = models.Restaurant || model<IRestaurant>('Restaurant', restaurantSchema);

export default Restaurant;