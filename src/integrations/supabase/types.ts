export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      audit_admin_config: {
        Row: {
          created_at: string
          id: string
          password_hash: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          password_hash: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          password_hash?: string
          updated_at?: string
        }
        Relationships: []
      }
      audit_runs: {
        Row: {
          created_at: string
          current_step: number | null
          id: string
          included_properties: string[] | null
          is_complete: boolean | null
          last_audit_date: string | null
          notes: string | null
          overall_risk_rating: Database["public"]["Enums"]["risk_rating"] | null
          primary_site_url: string
          stack_tools: Json | null
          summary_top_10_gaps: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_step?: number | null
          id?: string
          included_properties?: string[] | null
          is_complete?: boolean | null
          last_audit_date?: string | null
          notes?: string | null
          overall_risk_rating?:
            | Database["public"]["Enums"]["risk_rating"]
            | null
          primary_site_url: string
          stack_tools?: Json | null
          summary_top_10_gaps?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_step?: number | null
          id?: string
          included_properties?: string[] | null
          is_complete?: boolean | null
          last_audit_date?: string | null
          notes?: string | null
          overall_risk_rating?:
            | Database["public"]["Enums"]["risk_rating"]
            | null
          primary_site_url?: string
          stack_tools?: Json | null
          summary_top_10_gaps?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      findings: {
        Row: {
          audit_run_id: string
          created_at: string
          effort: Database["public"]["Enums"]["effort_size"] | null
          evidence_files: string[] | null
          evidence_links: string[] | null
          exact_fix: string | null
          finding_title: string
          id: string
          owner: Database["public"]["Enums"]["owner_type"] | null
          personal_info_involved: string | null
          pipeda_principles:
            | Database["public"]["Enums"]["pipeda_principle"][]
            | null
          severity: Database["public"]["Enums"]["severity_level"] | null
          status: Database["public"]["Enums"]["finding_status"] | null
          updated_at: string
          url_or_scope: string | null
          verification_steps: string | null
          what_is_happening: string | null
          why_it_matters: string | null
        }
        Insert: {
          audit_run_id: string
          created_at?: string
          effort?: Database["public"]["Enums"]["effort_size"] | null
          evidence_files?: string[] | null
          evidence_links?: string[] | null
          exact_fix?: string | null
          finding_title: string
          id?: string
          owner?: Database["public"]["Enums"]["owner_type"] | null
          personal_info_involved?: string | null
          pipeda_principles?:
            | Database["public"]["Enums"]["pipeda_principle"][]
            | null
          severity?: Database["public"]["Enums"]["severity_level"] | null
          status?: Database["public"]["Enums"]["finding_status"] | null
          updated_at?: string
          url_or_scope?: string | null
          verification_steps?: string | null
          what_is_happening?: string | null
          why_it_matters?: string | null
        }
        Update: {
          audit_run_id?: string
          created_at?: string
          effort?: Database["public"]["Enums"]["effort_size"] | null
          evidence_files?: string[] | null
          evidence_links?: string[] | null
          exact_fix?: string | null
          finding_title?: string
          id?: string
          owner?: Database["public"]["Enums"]["owner_type"] | null
          personal_info_involved?: string | null
          pipeda_principles?:
            | Database["public"]["Enums"]["pipeda_principle"][]
            | null
          severity?: Database["public"]["Enums"]["severity_level"] | null
          status?: Database["public"]["Enums"]["finding_status"] | null
          updated_at?: string
          url_or_scope?: string | null
          verification_steps?: string | null
          what_is_happening?: string | null
          why_it_matters?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "findings_audit_run_id_fkey"
            columns: ["audit_run_id"]
            isOneToOne: false
            referencedRelation: "audit_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      pages_or_flows: {
        Row: {
          audit_run_id: string
          confirmation_behavior: string | null
          consent_method: Database["public"]["Enums"]["consent_method"] | null
          created_at: string
          data_collected: string[] | null
          evidence_files: string[] | null
          evidence_notes: string | null
          id: string
          name: string
          purpose: string | null
          retention: string | null
          storage_destination: string | null
          url: string | null
        }
        Insert: {
          audit_run_id: string
          confirmation_behavior?: string | null
          consent_method?: Database["public"]["Enums"]["consent_method"] | null
          created_at?: string
          data_collected?: string[] | null
          evidence_files?: string[] | null
          evidence_notes?: string | null
          id?: string
          name: string
          purpose?: string | null
          retention?: string | null
          storage_destination?: string | null
          url?: string | null
        }
        Update: {
          audit_run_id?: string
          confirmation_behavior?: string | null
          consent_method?: Database["public"]["Enums"]["consent_method"] | null
          created_at?: string
          data_collected?: string[] | null
          evidence_files?: string[] | null
          evidence_notes?: string | null
          id?: string
          name?: string
          purpose?: string | null
          retention?: string | null
          storage_destination?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pages_or_flows_audit_run_id_fkey"
            columns: ["audit_run_id"]
            isOneToOne: false
            referencedRelation: "audit_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      resource_waitlist: {
        Row: {
          created_at: string
          email: string
          id: string
          source: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          source?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          source?: string | null
        }
        Relationships: []
      }
      third_party_vendors: {
        Row: {
          audit_run_id: string
          category: Database["public"]["Enums"]["vendor_category"] | null
          contract_dpa_status:
            | Database["public"]["Enums"]["contract_status"]
            | null
          countries: string | null
          created_at: string
          cross_border_processing:
            | Database["public"]["Enums"]["compliance_status"]
            | null
          data_shared: string | null
          evidence_files: string[] | null
          evidence_link: string | null
          id: string
          vendor_name: string
        }
        Insert: {
          audit_run_id: string
          category?: Database["public"]["Enums"]["vendor_category"] | null
          contract_dpa_status?:
            | Database["public"]["Enums"]["contract_status"]
            | null
          countries?: string | null
          created_at?: string
          cross_border_processing?:
            | Database["public"]["Enums"]["compliance_status"]
            | null
          data_shared?: string | null
          evidence_files?: string[] | null
          evidence_link?: string | null
          id?: string
          vendor_name: string
        }
        Update: {
          audit_run_id?: string
          category?: Database["public"]["Enums"]["vendor_category"] | null
          contract_dpa_status?:
            | Database["public"]["Enums"]["contract_status"]
            | null
          countries?: string | null
          created_at?: string
          cross_border_processing?:
            | Database["public"]["Enums"]["compliance_status"]
            | null
          data_shared?: string | null
          evidence_files?: string[] | null
          evidence_link?: string | null
          id?: string
          vendor_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "third_party_vendors_audit_run_id_fkey"
            columns: ["audit_run_id"]
            isOneToOne: false
            referencedRelation: "audit_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      tool_requests: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          tool_name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          tool_name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          tool_name?: string
        }
        Relationships: []
      }
      tracker_cookies: {
        Row: {
          audit_run_id: string
          created_at: string
          evidence_files: string[] | null
          evidence_paste: string | null
          expiry: string | null
          fires_before_consent:
            | Database["public"]["Enums"]["compliance_status"]
            | null
          id: string
          is_essential: boolean | null
          name: string
          purpose: string | null
          type: Database["public"]["Enums"]["tracker_type"] | null
          vendor: string | null
        }
        Insert: {
          audit_run_id: string
          created_at?: string
          evidence_files?: string[] | null
          evidence_paste?: string | null
          expiry?: string | null
          fires_before_consent?:
            | Database["public"]["Enums"]["compliance_status"]
            | null
          id?: string
          is_essential?: boolean | null
          name: string
          purpose?: string | null
          type?: Database["public"]["Enums"]["tracker_type"] | null
          vendor?: string | null
        }
        Update: {
          audit_run_id?: string
          created_at?: string
          evidence_files?: string[] | null
          evidence_paste?: string | null
          expiry?: string | null
          fires_before_consent?:
            | Database["public"]["Enums"]["compliance_status"]
            | null
          id?: string
          is_essential?: boolean | null
          name?: string
          purpose?: string | null
          type?: Database["public"]["Enums"]["tracker_type"] | null
          vendor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tracker_cookies_audit_run_id_fkey"
            columns: ["audit_run_id"]
            isOneToOne: false
            referencedRelation: "audit_runs"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      compliance_status:
        | "Compliant"
        | "Partially compliant"
        | "Not compliant"
        | "Unverified"
      consent_method: "checkbox" | "implied" | "opt-in" | "none"
      contract_status: "none" | "in_progress" | "complete"
      effort_size: "S" | "M" | "L"
      finding_status: "Open" | "In Progress" | "Done" | "Deferred"
      owner_type: "Web" | "Marketing" | "Ops" | "Legal"
      pipeda_principle:
        | "Accountability"
        | "Identifying Purposes"
        | "Consent"
        | "Limiting Collection"
        | "Limiting Use/Disclosure/Retention"
        | "Accuracy"
        | "Safeguards"
        | "Openness"
        | "Individual Access"
        | "Challenging Compliance"
      risk_rating: "Low" | "Medium" | "High"
      severity_level: "Critical" | "High" | "Medium" | "Low"
      tracker_type: "cookie" | "pixel" | "script" | "SDK"
      vendor_category:
        | "analytics"
        | "forms"
        | "booking"
        | "email"
        | "hosting"
        | "payments"
        | "chat"
        | "automation"
        | "other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      compliance_status: [
        "Compliant",
        "Partially compliant",
        "Not compliant",
        "Unverified",
      ],
      consent_method: ["checkbox", "implied", "opt-in", "none"],
      contract_status: ["none", "in_progress", "complete"],
      effort_size: ["S", "M", "L"],
      finding_status: ["Open", "In Progress", "Done", "Deferred"],
      owner_type: ["Web", "Marketing", "Ops", "Legal"],
      pipeda_principle: [
        "Accountability",
        "Identifying Purposes",
        "Consent",
        "Limiting Collection",
        "Limiting Use/Disclosure/Retention",
        "Accuracy",
        "Safeguards",
        "Openness",
        "Individual Access",
        "Challenging Compliance",
      ],
      risk_rating: ["Low", "Medium", "High"],
      severity_level: ["Critical", "High", "Medium", "Low"],
      tracker_type: ["cookie", "pixel", "script", "SDK"],
      vendor_category: [
        "analytics",
        "forms",
        "booking",
        "email",
        "hosting",
        "payments",
        "chat",
        "automation",
        "other",
      ],
    },
  },
} as const
