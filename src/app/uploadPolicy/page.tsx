"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function UploadPolicyForm() {
  const [showExtraFields, setShowExtraFields] = useState(false);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md mt-10 border border-gray-200">
      <h2 className="text-xl font-semibold text-primary mb-6">Upload Policy</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
      
      <div className="md:col-span-2">
          <Label htmlFor="fileUpload" className="text-primary">Upload File</Label>
          <Input id="fileUpload" type="file" />
        </div>
        
   
        {/* POSP Agent */}
        <div>
          <Label htmlFor="pospAgent" className="text-primary">POSP Agent</Label>
          <Input id="pospAgent" placeholder="Enter POSP Agent Name" />
        </div>

        {/* Case Type */}
        <div>
          <Label htmlFor="caseType" className="text-primary">Case Type</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Case Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="pull">Pull</SelectItem>
              <SelectItem value="rollover">Rollover</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Commission Details */}
        <div className="md:col-span-2">
          <h3 className="text-md font-medium text-primary mt-6 mb-2">Commission Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="commissionType" className="text-primary">Commission Payout Basis</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Basis" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="od">OD Premium</SelectItem>
                  <SelectItem value="tp">TP Premium</SelectItem>
                  <SelectItem value="odtp">OD and TP Premium</SelectItem>
                  <SelectItem value="net">Net Premium</SelectItem>
                  <SelectItem value="total">Total Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="commissionReceivable" className="text-primary">Commission Receivable (%)</Label>
              <Input id="commissionReceivable" type="number" placeholder="Enter %" />
            </div>

            <div>
              <Label htmlFor="commissionPayable" className="text-primary">Commission Payable</Label>
              <Input id="commissionPayable" type="number" placeholder="Enter Amount" />
            </div>
          </div>
        </div>

        {/* Additional Detail */}
        <div className="md:col-span-2">
          <Label htmlFor="additionalDetail" className="text-primary">Additional Detail</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Bus" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bus1">Bus 1</SelectItem>
              <SelectItem value="bus2">Bus 2</SelectItem>
              <SelectItem value="bus3">Bus 3</SelectItem>
              <SelectItem value="bus4">Bus 4</SelectItem>
            </SelectContent>
          </Select>
        </div>

       
      </div>

      <div className="mt-6 text-right">
        <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
          Submit
        </Button>
      </div>
    </div>
  );
}