import React from "react";
import { useNavigate } from "react-router-dom";
import "./MemberRegistration.css";

function MemberRegistration() {
  const navigate = useNavigate();

  return (
    <div className="form-container">
      <button
        type="button"
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← 
      </button>

      <h2>Community Member Registration</h2>

      <form>
        {/* Personal Details */}
        <fieldset>
          <legend>Personal Details</legend>
          <div className="row">
            <div className="form-group long-input">
              <label>Full Name</label>
              <input type="text" name="fullName" />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select name="gender">
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" name="dob" />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                maxLength="10"
                pattern="[0-9]{10}"
                placeholder="Enter 10-digit number"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" />
            </div>
          </div>
        </fieldset>

        {/* Address & Location */}
        <fieldset className="address-fieldset">
          <legend>Address & Location</legend>
          <div className="row single-row">
            <div className="form-group">
              <label>Country</label>
              <input type="text" name="country" />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" name="state" />
            </div>
            <div className="form-group">
              <label>District</label>
              <input type="text" name="district" />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>City/Town</label>
              <input type="text" name="city" />
            </div>
            <div className="form-group">
              <label>Area/Locality</label>
              <input type="text" name="area" />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Pincode</label>
              <input type="text" name="pincode" />
            </div>
            <div className="form-group">
              <label>Native Place</label>
              <input type="text" name="nativePlace" />
            </div>
          </div>
        </fieldset>

        {/* Religion & Caste */}
        <fieldset>
          <legend>Religion & Caste</legend>
          <div className="row">
            <div className="form-group">
              <label>Religion</label>
              <input type="text" name="religion" />
            </div>
            <div className="form-group">
              <label>Caste</label>
              <input type="text" name="caste" />
            </div>
            <div className="form-group">
              <label>Sub-Caste</label>
              <input type="text" name="subCaste" />
            </div>
            <div className="form-group">
              <label>Denomination</label>
              <input type="text" name="denomination" />
            </div>
          </div>
        </fieldset>

        {/* Professional / Business Details */}
        <fieldset>
          <legend>Professional / Business Details</legend>
          <div className="row row-3">
            <div className="form-group">
              <label>Occupation</label>
              <input type="text" name="occupation" />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" name="companyName" />
            </div>
            <div className="form-group">
              <label>Business Type</label>
              <input type="text" name="businessType" />
            </div>
          </div>
          <div className="row row-2">
            <div className="form-group">
              <label>Skills/Expertise</label>
              <input type="text" name="skills" />
            </div>
            <div className="form-group">
              <label>Business Website</label>
              <input type="text" name="businessWebsite" />
            </div>
          </div>
        </fieldset>

        {/* Volunteer / Community Info */}
        <fieldset className="volunteer-fieldset">
          <legend>Volunteer / Community Info</legend>
          <div className="row row-3">
            <div className="form-group">
              <label>Member Type</label>
              <input type="text" name="memberType" />
            </div>
            <div className="form-group">
              <label>Willing to Volunteer?</label>
              <select name="volunteer">
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="form-group">
              <label>Availability</label>
              <input type="text" name="availability" />
            </div>
          </div>
          <div className="row row-1">
            <div className="form-group">
              <label>Areas of Interest</label>
              <input type="text" name="interest" />
            </div>
          </div>
        </fieldset>

        {/* Family / Social Info */}
        <fieldset className="family-fieldset">
          <legend>Family / Social Information</legend>
          <div className="row">
            <div className="form-group">
              <label>Marital Status</label>
              <input type="text" name="maritalStatus" />
            </div>
            <div className="form-group">
              <label>Reference Member</label>
              <input type="text" name="referenceMember" />
            </div>
            <div className="form-group">
              <label>Emergency Contact</label>
              <input type="text" name="emergencyContact" />
            </div>
          </div>
        </fieldset>

        {/* Privacy & Consent */}
        <fieldset>
          <legend>Privacy & Consent</legend>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="religiousConsent" />
              I consent to store my religious/caste information.
            </label>
            <label>
              <input type="checkbox" name="directoryConsent" />
              Display my profile in the community directory.
            </label>
            <label>
              <input type="checkbox" name="termsConsent" required />
              I accept the Terms & Conditions.
            </label>
          </div>
        </fieldset>

        <button type="submit">Submit Registration</button>
      </form>
    </div>
  );
}

export default MemberRegistration;
